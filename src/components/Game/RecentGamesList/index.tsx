import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { FlatList, View } from "react-native";
import { EmpetyMessage, Text } from "@components/index";
import { RecentGamesState } from "@store/types/recentGamesType";
import RecentGame from "../RecentGame";

const RecentGamesList: React.FC = () => {
  const recentGamesState = useSelector(
    (states: RootState) => states.recentGames as RecentGamesState
  );

  if (recentGamesState.recentGames.length === 0)
    return <EmpetyMessage message="Not recent games found" />;

  return (
    <View>
      <Text>Total items: {recentGamesState.recentGames.length}</Text>
      <FlatList
        data={recentGamesState.recentGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => <RecentGame recentGame={itemData.item} />}
      ></FlatList>
    </View>
  );
};

export default RecentGamesList;
