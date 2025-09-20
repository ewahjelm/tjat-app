import { Avatar } from "../../components";
const Header = ({ friend = "NN" }) => {
  return (
    <header>
      <Avatar>Default</Avatar>
      <h1>Tjatapp</h1>
      <h3>{friend}</h3>
    </header>
  );
};
export default Header;
