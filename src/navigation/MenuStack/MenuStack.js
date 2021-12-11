import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from '../../pages/Menu/Menu';
import MenuDetail from '../../pages/Menu/MenuDetail';
import CreateMenu from '../../pages/Menu/CreateMenu';
import routes from '../routes';

const Stack = createNativeStackNavigator();

export default function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MENU_PAGE}
        component={Menu}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu',
        }}
      />
      <Stack.Screen
        name={routes.CREATE_MENU_PAGE}
        component={CreateMenu}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Create Menu',
        }}
      />
      <Stack.Screen
        name={routes.MENU_DETAIL_PAGE}
        component={MenuDetail}
        options={{
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: '300',
          },
          headerBackTitleVisible: false,
          headerTitle: 'Menu Detail',
        }}
      />
    </Stack.Navigator>
  );
}
