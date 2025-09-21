import {
  Header,
  Message,
  MessageInput,
  Avatar,
  BurgerMenu,
} from "../../components";

const Chat = () => {
  return (
    <div>
      <Header />
      <main>
        <Message text="latest message" />
      </main>
      {/* < Footer /> */}
    </div>
  );
};
export default Chat;
