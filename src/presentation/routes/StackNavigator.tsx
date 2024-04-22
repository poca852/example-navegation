import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreent } from '../screens/home/HomeScreent';
import { ProudctsScreen } from '../screens/products/ProudctsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScree } from '../screens/products/ProductScree';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export type RootStackParams = {
  Home: undefined,
  Products: undefined,
  Product: {id: number, name: string},
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  const navigator = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreent} />
      <Stack.Screen name="Products" component={ProudctsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Product" component={ProductScree} />
    </Stack.Navigator>
  )
}