import MessagesListContainer from "./components/Messages/MessagesListContainer";
import Typing from "./components/Typing/Typing";

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col mx-auto">
        <div className="fixed inset-0 flex flex-col items-center">
          <h1 className="text-4xl my-4">Sala de chat</h1>
          <MessagesListContainer />
          <Typing />
        </div>
      </div>
    </>
  );
};

export default App;
