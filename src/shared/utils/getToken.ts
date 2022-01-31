import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  const TOKEN = await AsyncStorage.getItem('TOKEN')
  return TOKEN
}