import {
  Card,
  MsgHeader,
  Message,
  MessageInput,
  Avatar,
  BurgerMenu,
} from "../../components";
import styles from "./Chat.module.css";

const Chat = ({sender = "Annika"}) => {
  return (
    // <Card>
    <>
      <MsgHeader sender={sender}/>
      <div className = {styles.messagesContainer} >
        <Message sender={sender} text="Hej på dig, du!" />
        <Message sender = "me" text="Tjenare!" />
        <Message text = "Hur är det?"/>
      </div>
    </>
    // </Card>
  );
};
export default Chat;
