import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Login }  from '../pages/Login';
import { SignUp } from '../pages/SignUp';

const { Screen, Navigator } = createNativeStackNavigator();

export function LoginRoutes() {
	return (
		<Navigator
		
		screenOptions={{headerShown: false}}>
			<Screen name="Login" component={Login} />
			<Screen name="SignUp" component={SignUp} />
			<Screen name="Home" component={Home} />
		</Navigator>
	);
}