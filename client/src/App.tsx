import MessagesListContainer from "./components/Messages/MessagesListContainer";
import Typing from "./components/Typing/Typing";

interface AppProps {
  nickname: string;
}

const App: React.FC<AppProps> = ({ nickname }: AppProps) => {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="fixed inset-0 flex flex-col items-center mx-4">
          <h1 className="text-4xl my-4">Sala de chat</h1>
          <MessagesListContainer nickname={nickname} />
          <Typing />
        </div>
      </div>
    </>
  );
};

export default App;
