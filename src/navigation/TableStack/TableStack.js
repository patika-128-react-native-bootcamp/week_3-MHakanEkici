import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Tables from '../../pages/Tables/Tables';
import TableUpdate from '../../pages/Tables/TableUpdate';
import routes from '../routes';

export default function TableStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.TABLES_PAGE}
        component={Tables}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Tables',
        }}
      />
      <Stack.Screen
        name={routes.TABLE_UPDATE_PAGE}
        component={TableUpdate}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'TableUpdate',
        }}
      />
    </Stack.Navigator>
  );
}
