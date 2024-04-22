import { Pressable, Text } from "react-native"
import { globalStyles } from "../../../config/theme/theme"

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({
  onPress,
  label
}: Props) => {


  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.primaryBtn}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}
