import { Avatar } from "..";
import styles from "./MsgHeader.module.css";

const MsgHeader = ({ sender = "NN" }) => {
  return (
    <header className = {styles.header}>
        <div>
          {sender !== "me" ? (
          <div className = {styles.incoming}>
            <Avatar className = {styles.avatar}>Default</Avatar>
            <h3>{sender}</h3>
          </div> 
          ) : null }
        </div>    
    </header>
)
};
export default MsgHeader;
