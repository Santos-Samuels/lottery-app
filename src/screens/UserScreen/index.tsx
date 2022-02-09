import { AppContainer, Title, Text, Input } from "@components/index";
import {
  StyledViewRow,
  StyledText,
  StyledTouchableOpacity,
  ContainerHeader,
  Container,
  StyledButton,
  EditButtonsContainer,
  ButtonText
} from "./styled";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { colors } from "@shared/globalStyles/colors";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfo, logout } from "@store/actions/authActions";
import { RootState } from "@store/index";
import { AuthState } from "@store/types/authTypes";
import {
  emailValidation,
  setAlert,
  usernameValidation,
} from "@shared/utils";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ActivityIndicator } from 'react-native';

const UserScreen: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((states: RootState) => states.auth as AuthState);
  const [isEditing, setIsEditing] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm({
    defaultValues: { name: auth.user!.name, email: auth.user!.email },
  });
  const [loading, setLoading] = useState(false)

  const logoutHandler = async () => {
    await logout(dispatch);
  };

  const editUserInfoHandler = async (data: { name: string, email: string }) => {
    setLoading(true)
    if (!usernameValidation(data.name)) {
      setError("name", { message: "Invalid name" });
      setAlert("Error", "Invalid name");
      setLoading(false)
      return false;
    }

    if (!emailValidation(data.email)) {
      setError("email", { message: "Invalid email" });
      setAlert("Error", "Invalid email");
      setLoading(false)
      return;
    }

    await editUserInfo(dispatch, data)
    setIsEditing(false);
    reset();
    setLoading(false)
  };

  if (isEditing) {
    return (
      <AppContainer isScrollable={false}>
        <StyledViewRow>
          <Title size="md"> Your account </Title>

          <StyledTouchableOpacity onPress={logoutHandler}>
            <StyledText color={colors.error}>Out</StyledText>
            <MaterialIcons name="logout" size={24} color={colors.error} />
          </StyledTouchableOpacity>
        </StyledViewRow>

        <Container>
          <ContainerHeader>
            <StyledViewRow>
              <StyledText color="white">Editing</StyledText>

            <EditButtonsContainer>
                <StyledTouchableOpacity onPress={() => setIsEditing(false)} disabled={loading}>
                  <StyledButton color={colors.error}>
                    <ButtonText color="#FFFFFF">Cancel</ButtonText>
                  </StyledButton>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity
                  onPress={handleSubmit(editUserInfoHandler)}
                  disabled={loading}
                >
                  <StyledButton color="#FFFFFF">
                    {loading ? <ActivityIndicator size="small" color={colors.primary} /> : <ButtonText color={colors.text}>Save</ButtonText>}
                  </StyledButton>
                </StyledTouchableOpacity>
            </EditButtonsContainer>
              </StyledViewRow>
          </ContainerHeader>

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
                errorMessage={
                  errors.name?.type === "required" ? "Required Name" : ""
                }
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
                errorMessage={
                  errors.email?.type === "required" ? "Required Email" : ""
                }
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            )}
          />
        </Container>
      </AppContainer>
    );
  }

  return (
    <AppContainer isScrollable={false}>
      <StyledViewRow>
        <Title size="md"> Your account </Title>

        <StyledTouchableOpacity onPress={logoutHandler}>
          <StyledText color={colors.error}>Out</StyledText>
          <MaterialIcons name="logout" size={24} color={colors.error} />
        </StyledTouchableOpacity>
      </StyledViewRow>

      <Container>
        <ContainerHeader>
          <StyledViewRow>
            <FontAwesome name="user" size={24} color="white" />

            <StyledTouchableOpacity onPress={() => setIsEditing(true)}>
              <FontAwesome name="pencil" size={24} color="white" />
              <StyledText color="white">Edit</StyledText>
            </StyledTouchableOpacity>
          </StyledViewRow>
        </ContainerHeader>

        <StyledViewRow padding={10}>
          <Text>Name</Text>
          <Text bold>{auth.user!.name}</Text>
        </StyledViewRow>

        <StyledViewRow padding={10}>
          <Text>Email</Text>
          <Text bold>{auth.user!.email}</Text>
        </StyledViewRow>
      </Container>
    </AppContainer>
  );
};

export default UserScreen;
