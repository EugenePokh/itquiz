import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import itquiz_test from './src/itquiz_test';
import itquiz_greeting from './src/itquiz_greeting';

const Stack = createNativeStackNavigator();

console.log('Web app is loading');

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="itquiz_greeting"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(8, 221, 196, 0.8)',
            height: 70,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="itquiz_test"
          component={itquiz_test}
          options={{ title: 'ИТ тест для КОД РОСТА' }}
        />
        <Stack.Screen
          name="itquiz_greeting"
          component={itquiz_greeting}
          options={{ title: 'Добро пожаловать!' }}
        />
        </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
