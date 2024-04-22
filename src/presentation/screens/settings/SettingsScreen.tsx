import { Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/theme"
import { NavigationProp, StackActions, useNavigation } from "@react-navigation/native"
import type { RootStackParams } from "../../routes/StackNavigator"
import { PrimaryButton } from "../../components/shared/PrimaryButton"

export const SettingsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <View style={globalStyles.container}>

      <Text
        style={{
          color: 'black',
          fontSize: 30,
          marginBottom: 20,
        }}
      >SettingsScreen</Text>

        <PrimaryButton 
          label='Regresar'
          onPress={() => navigation.goBack()}
        />

        <PrimaryButton 
          label='Regresar al Home'
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        />

    </View>
  )
}
