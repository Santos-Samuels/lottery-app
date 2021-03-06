import {
  AuthContainer,
  AuthContent,
  Input,
  Button,
  AuthError,
  Title,
} from "@components/index";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { emailValidation } from "@shared/utils";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import { TouchableOpacity } from "react-native";
import { IResetPasswordInfo } from "@shared/interfaces";
import { AuthScreenProp } from "@stacks/index";
import { useNavigation } from "@react-navigation/native";
import { ResetPassword } from "@shared/services";

const formInitialValues: IResetPasswordInfo = { email: "" };

const ResetPasswordScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation<AuthScreenProp>()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError
  } = useForm<IResetPasswordInfo>({
    defaultValues: formInitialValues,
  });

  const signupHandler = async (data: IResetPasswordInfo) => {
    if (!emailValidation(data.email)) {
      setError("email", { message: "Invalid email" })
      setErrorMessage("Invalid email");
      return
    }

    const response = await ResetPassword(data.email)

    if (typeof response !== 'boolean') {
      reset(formInitialValues)
      setErrorMessage("");
      navigation.navigate('ChangePasswordScreen', {token: response.token!})
      return
    }

    setError("email", { message: "Account not found" })
    setErrorMessage("Account not found");
  };

  return (
    <AuthContainer>
      <Title size="lg">Reset password</Title>

      <AuthContent>
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isError={errors.email ? true : false}
              errorMessage={errors.email?.type === 'required' ? 'Required Email' : ''}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          )}
        />

        {errorMessage ? <AuthError message={errorMessage} /> : null}

        <Button onPress={handleSubmit(signupHandler)}>
          Send link{" "}
          <AntDesign
            name="arrowright"
            style={{ marginLeft: 5 }}
            size={30}
            color={colors.primary}
          />
        </Button>
      </AuthContent>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Title size="lg">
          <AntDesign
            name="arrowleft"
            style={{ marginRight: 5 }}
            size={30}
            color={colors.text}
          />
          {" "}Back
        </Title>
      </TouchableOpacity>
    </AuthContainer>
  )
}

export default ResetPasswordScreen