import MessagesListContainer from "./components/Messages/MessagesListContainer";
import { UserProvider } from "./contexts/UserContext";

interface AppProps {
  nickname: string;
}

const App: React.FC<AppProps> = ({ nickname }) => {
  return (
    <UserProvider>
      <MessagesListContainer nickname={nickname} />
    </UserProvider>
  );
};

export default App;
