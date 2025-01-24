import MessagesListContainer from "./components/Messages/MessagesListContainer";

interface AppProps {
  nickname: string;
}

const App: React.FC<AppProps> = ({ nickname }) => {
  return (
    <>
      <MessagesListContainer nickname={nickname} />
    </>
  );
};

export default App;
