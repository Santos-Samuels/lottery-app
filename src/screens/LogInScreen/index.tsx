import {
  AuthContainer,
  AuthContent,
  Input,
  Button,
  AuthError,
  Title,
} from "@components/index";
import { useForm, Controller } from "react-hook-form";
import { StyledText, StyledTouchableOpacity } from "./style";
import { useEffect, useState } from "react";
import { emailValidation } from "@shared/utils";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import { TouchableOpacity } from "react-native";
import { ILoginInfo, IRequestStatus, IToken, IUser } from "@shared/interfaces";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenProp, MainScreenProp } from "@stacks/index";
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from "@store/actions/authActions";

const formInitialValues: ILoginInfo = { email: "", password: "" };
const InitialRequestStatus: IRequestStatus = { loading: false, success: false, error: '' };

const LogInScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    getValues,
    clearErrors
  } = useForm<ILoginInfo>({
    defaultValues: formInitialValues,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState<IRequestStatus>(InitialRequestStatus);
  const dispatch = useDispatch();
  const authNavigation = useNavigation<AuthScreenProp>()
  const mainNavigation = useNavigation<MainScreenProp>()

  const enteredInfoValidation = (data: ILoginInfo) => {
    if (!emailValidation(data.email)) {
      setError("email", { message: "Invalid email" })
      setErrorMessage("Invalid email");
      return
    }

    clearErrors()
    setLoginStatus(prevInfo => {return { ...prevInfo, loading: true }})
  }

  const loginHandler = async () => {
    const data = getValues()
    const TOKEN = await login(dispatch, data);

    if (TOKEN) {
      await AsyncStorage.setItem('TOKEN', JSON.stringify(TOKEN))
      setLoginStatus(prevInfo => {return { ...prevInfo, loading: false, success: true }})
      setErrorMessage("");
      reset(formInitialValues)
      return
    }
      
    setLoginStatus(prevInfo => {return { ...prevInfo, loading: false, error: 'Incorret email or password' }})
    setErrorMessage("Incorret email or password");
  };

  useEffect(() => {
    if (loginStatus.loading)
      loginHandler()

    if (loginStatus.success) 
      mainNavigation.navigate('HomeScreen')

  }, [loginStatus])

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

        <StyledTouchableOpacity onPress={() => authNavigation.navigate('ResetPasswordScreen')}>
          <StyledText> I forget my password </StyledText>
        </StyledTouchableOpacity>

        <Button onPress={handleSubmit(enteredInfoValidation)} isLoading={loginStatus.loading}>
          Log In{" "}
          <AntDesign
            name="arrowright"
            style={{ marginLeft: 5 }}
            size={30}
            color={colors.primary}
          />
        </Button>
      </AuthContent>

      <TouchableOpacity onPress={() => authNavigation.navigate('SignUpScreen')}>
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
