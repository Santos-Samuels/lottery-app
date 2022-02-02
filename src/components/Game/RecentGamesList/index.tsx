import { RootState } from "@store/index"
import { useSelector } from "react-redux"
import { Text } from "react-native";
import { EmpetyMessage } from '@components/index'
import { RecentGamesState } from "@store/types/recentGamesType";

const RecentGamesList: React.FC = () => {
  const recentGamesState = useSelector((states: RootState) => states.rules as RecentGamesState)
  console.log('games', recentGamesState!.recentGames)
  console.log('filters', recentGamesState!.filters)
  if (!recentGamesState!.recentGames) return <EmpetyMessage message="Not recent games found" />

  return (<Text>
    {JSON.stringify(recentGamesState?.recentGames)}
  </Text>
  );
};

export default RecentGamesList;
