import { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { EmpetyMessage } from "@components/index";
import { RecentGamesState } from "@store/types/recentGamesType";
import RecentGame from "../RecentGame";

const RecentGamesList: React.FC = () => {
  const recentGamesState = useSelector(
    (states: RootState) => states.recentGames as RecentGamesState
  );

  if (!recentGamesState.recentGames)
    return <EmpetyMessage message="Not recent games found" />;

  return (
    <FlatList
      data={recentGamesState.recentGames}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(itemData) => <RecentGame recentGame={itemData.item} />}
    ></FlatList>
  );
};

export default RecentGamesList;
