import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskScreen } from '../presentation/screens/TaskScreen';

const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={TaskScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);