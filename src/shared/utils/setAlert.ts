import { Alert } from "react-native";

export const setAlert = (title: string, message: string) => {
  Alert.alert(title, message, [
    { text: "OK" },
  ]);
};