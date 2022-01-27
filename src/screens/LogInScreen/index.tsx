import { AuthContainer, AuthContent, Input, Button, AuthError } from "@components/index";
import { ILoginInfo } from "./interface";
import { useForm, Controller } from "react-hook-form";
import { StyledText, StyledTouchableOpacity } from "./style";
import { useState } from "react";

const formInitialValues: ILoginInfo = { email: "", password: "" };

const LogInScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInfo>({
    defaultValues: formInitialValues,
  });


  const loginHandler = (data: ILoginInfo) => {
    console.log(data);
  };

  // const errorHandler = () => {
  //   if (errors.email) {
      
  //   }
  // };

  return (
    <AuthContainer>
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
              isError={ errors.email ? true : false }
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
              isError={false}
              placeholder="Password"
            />
          )}
        />

        <AuthError message={errorMessage} />

        <StyledTouchableOpacity onPress={() => {}}>
          <StyledText> I forget my password </StyledText>
        </StyledTouchableOpacity>

        <Button onPress={handleSubmit(loginHandler)}>Log In</Button>
      </AuthContent>
    </AuthContainer>
  );
};

export default LogInScreen;
