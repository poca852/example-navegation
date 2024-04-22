import { type DrawerContentComponentProps, createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors, globalStyles } from '../../config/theme/theme';
import { View, useWindowDimensions } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{

        headerShown: false,
        drawerType: (dimensions.width >= 600) ? 'permanent' : 'slide',
        
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        }
      }}
    >
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {



  return (
    <DrawerContentScrollView>
      <View 
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 20,
          borderRadius: 50,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}