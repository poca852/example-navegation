import { View, Text } from "react-native"
import { HamburguerMenu } from "../../components/shared/HamburguerMenu"
import { IonIcon } from "../../components/shared/ionIcon"


export const Tab1Screen = () => {

  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1 screen</Text>
      <IonIcon 
        name="add-outline"
        size={20}
        color="black"
      />
    </View>
  )
  
}
