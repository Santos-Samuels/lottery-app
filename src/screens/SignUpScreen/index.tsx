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
import { emailValidation, usernameValidation } from "@shared/utils";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import { TouchableOpacity } from "react-native";
import { IRegisterInfo } from "@shared/interfaces";
import { AuthScreenProp } from "@stacks/index";
import { useNavigation } from "@react-navigation/native";
import { RegisterUser } from "@shared/services/auth/register";

const formInitialValues: IRegisterInfo = { name: "", email: "", password: "" };

const SignUpScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation<AuthScreenProp>()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError
  } = useForm<IRegisterInfo>({
    defaultValues: formInitialValues,
  });

  const signupHandler = async (data: IRegisterInfo) => {
    if (!usernameValidation(data.name)) {
      setError("name", { message: "Invalid name" })
      setErrorMessage("Invalid name");
      return false;
    }

    if (!emailValidation(data.email)) {
      setError("email", { message: "Invalid email" })
      setErrorMessage("Invalid email");
      return
    }

    await RegisterUser(data)
    reset(formInitialValues)
    setErrorMessage("");
    navigation.navigate('LogInScreen')
  };

  return (
    <AuthContainer>
      <Title size="lg">Registration</Title>

      <AuthContent>
      <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isError={errors.name ? true : false}
              errorMessage={errors.name?.type === 'required' ? 'Required Name' : ''}
              placeholder="Name"
            />
          )}
        />

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

        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isError={errors.password ? true : false}
              errorMessage={errors.password?.type === 'required' ? 'Required Password' : ''}
              secureTextEntry={true}
              placeholder="Password"
            />
          )}
        />

        {errorMessage ? <AuthError message={errorMessage} /> : null}

        <Button onPress={handleSubmit(signupHandler)}>
          Register{" "}
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

export default SignUpScreen