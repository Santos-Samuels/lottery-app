import { StyledText } from "./style";

interface IProps {
  message: string;
}

const AuthError: React.FC<IProps> = (props) => {
  return <StyledText>{props.message}</StyledText>;
};

export default AuthError;
