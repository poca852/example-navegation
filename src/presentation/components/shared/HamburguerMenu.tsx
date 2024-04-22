import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { Pressable, Text } from "react-native"
import { IonIcon } from "./ionIcon";
import { globalColors } from "../../../config/theme/theme";

export const HamburguerMenu = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon
            name="menu-outline"
            size={25}
            color={globalColors.primary}
          />
        </Pressable>
      )
    })
  },[])

  return (
    <></>
  )
}
