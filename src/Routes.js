import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WordCounter from './views/WordCounter';
import Home from './views/Home';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="WordCounter"
        component={WordCounter}
      />
    </Stack.Navigator>
  );
}

export default Routes;
