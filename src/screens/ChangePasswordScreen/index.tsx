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
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import { TouchableOpacity } from "react-native";
import { AuthScreenProp } from "@stacks/index";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ChangePassword } from "@shared/services";
import { AuthStackParamList } from "@stacks/AuthStack";

const formInitialValues = { password: "", confirmPassword: "" };
type ChangePasswordScreenRouteProp = RouteProp<AuthStackParamList, 'ChangePasswordScreen'>;

const ResetPasswordScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation<AuthScreenProp>();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    defaultValues: formInitialValues,
  });
  const route = useRoute<ChangePasswordScreenRouteProp>()

  const changePasswordHandler = (data: { password: string, confirmPassword: string }) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Passwords don't match" });
      setErrorMessage("Passwords don't match");
      return;
    }

    ChangePassword(route.params.token, data.password)
    reset(formInitialValues);
    setErrorMessage("");
    navigation.navigate('LogInScreen')
  };

  return (
    <AuthContainer>
      <Title size="lg">Reset password</Title>

      <AuthContent>
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
              errorMessage={
                errors.password?.type === "required" ? "Required Password" : ""
              }
              secureTextEntry={true}
              placeholder="Password"
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isError={errors.password ? true : false}
              errorMessage={
                errors.password?.type === "required" ? "Required Password" : ""
              }
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
          )}
        />

        {errorMessage ? <AuthError message={errorMessage} /> : null}

        <Button onPress={handleSubmit(changePasswordHandler)}>
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
          />{" "}
          Back
        </Title>
      </TouchableOpacity>
    </AuthContainer>
  );
};

export default ResetPasswordScreen;
