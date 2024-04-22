import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View
      style={{
        flex:1,
        paddingHorizontal: 20,
        marginTop: top + 20
      }}
    >
      <Text
        style={{color: 'black', marginBottom: 10}}
      >ProfileScreen</Text>

      <PrimaryButton 
        label="Abrir menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  )
}
