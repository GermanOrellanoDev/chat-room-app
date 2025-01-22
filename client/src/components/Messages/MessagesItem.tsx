interface MessagesItemProps {
  message: string;
}

const MessagesItem: React.FC<MessagesItemProps> = ({ message }) => {
  return (
    <>
      <div></div>
      <h2>MessagesItem</h2>
      <p>Contenido{message}</p>
    </>
  );
};

export default MessagesItem;
