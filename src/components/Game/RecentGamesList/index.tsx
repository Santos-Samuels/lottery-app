import { RootState } from "@store/index"
import { useSelector } from "react-redux"
import { Text } from "react-native";
import { EmpetyMessage } from '@components/index'
import { RecentGamesState } from "@store/types/recentGamesType";

const RecentGamesList: React.FC = () => {
  const recentGamesState = useSelector((states: RootState) => states.recentGames as RecentGamesState)

  if (!recentGamesState.recentGames) return <EmpetyMessage message="Not recent games found" />

  return (<Text>
    {JSON.stringify(recentGamesState.recentGames)}
  </Text>
  );
};

export default RecentGamesList;
