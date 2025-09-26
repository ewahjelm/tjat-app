import { Avatar } from "..";
import styles from "./Header.module.css";

const Header = ({ sender = "NN" }) => {
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
export default Header;
