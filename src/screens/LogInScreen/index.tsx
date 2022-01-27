import {
  AuthContainer,
  AuthContent,
  Input,
  Button,
  AuthError,
  Title,
} from "@components/index";
import { ILoginInfo } from "./interface";
import { useForm, Controller } from "react-hook-form";
import { StyledText, StyledTouchableOpacity } from "./style";
import { useState } from "react";
import { emailValidation } from "@shared/utils";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/GlobalStyles/colors";
import { TouchableOpacity } from "react-native";

const formInitialValues: ILoginInfo = { email: "", password: "" };

const LogInScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<ILoginInfo>({
    defaultValues: formInitialValues,
  });

  const loginHandler = (data: ILoginInfo) => {
    if (!emailValidation(data.email)) {
      setError("email", { message: "Invalid email" })
      setErrorMessage("Invalid name");
      return false;
    }

    reset(formInitialValues)
    setErrorMessage("");
    console.log(data);
  };

  return (
    <AuthContainer>
      <Title>Authentication</Title>

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
              isError={errors.email || errorMessage ? true : false}
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

        <StyledTouchableOpacity onPress={() => {}}>
          <StyledText> I forget my password </StyledText>
        </StyledTouchableOpacity>

        <Button onPress={handleSubmit(loginHandler)}>
          Log In{" "}
          <AntDesign
            name="arrowright"
            style={{ marginLeft: 5 }}
            size={30}
            color={colors.primary}
          />
        </Button>
      </AuthContent>

      <TouchableOpacity onPress={() => {}}>
        <Title>
          Sign Up{" "}
          <AntDesign
            name="arrowright"
            style={{ marginLeft: 5 }}
            size={30}
            color={colors.text}
          />
        </Title>
      </TouchableOpacity>
    </AuthContainer>
  );
};

export default LogInScreen;
