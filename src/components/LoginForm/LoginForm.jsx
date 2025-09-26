import { LoginInput } from '../LoginInput';
import { Button } from '../Button';
import styles from './LoginForm.module.css';

const LoginForm = ({username, password}) => {
	return (
	<div>
		<h3>Fyll i dina uppgifter</h3>
		<form>
	<LoginInput
		label="Användarnamn:"/>
	<LoginInput 
		label = "Lösenord:"/>
	<Button ButtonText = "Logga in"/>
		</form>
	</div>)
};
export default LoginForm;
