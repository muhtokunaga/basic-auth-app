import { NavigationContainer } from '@react-navigation/native';
import { LoginRoutes } from './stackRoutes';

export function Routes() {
	return (
		<NavigationContainer>
			<LoginRoutes />
		</NavigationContainer>
	);
}