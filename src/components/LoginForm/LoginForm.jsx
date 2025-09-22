import { LoginInput } from '../LoginInput';
import { Button } from '../Button';

const LoginForm = ({username, password}) => {
	return (
	<div>
		<h3>Fyll i dina uppgifter</h3>
		<form>
	<LoginInput
		label="Användarnamn:"/>
	<LoginInput 
		label = "Lösenord:"/>
	<Button />
		</form>
	</div>)
};
export default LoginForm;
