import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";

export const HomeScreent = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(()=> {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text
            style={{color: 'black'}}
          >menu</Text>
        </Pressable>
      )
    })
  },[])

  return (

    <View style={globalStyles.container}>

     <PrimaryButton 
      label='Products'
      onPress={() => navigation.navigate('Products')}
     />

     <PrimaryButton 
      label='Settings'
      onPress={() => navigation.navigate('Settings')}
     />

    </View>

  )


}
