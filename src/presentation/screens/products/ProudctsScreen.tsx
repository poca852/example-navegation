import { Text, View, FlatList } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStackParams } from '../../routes/StackNavigator'

const products = [
  { id: 1, name: 'Product1' },
  { id: 2, name: 'Product2' },
  { id: 3, name: 'Product3' },
  { id: 4, name: 'Product4' },
  { id: 5, name: 'Product5' },
  { id: 6, name: 'Product6' },
  { id: 7, name: 'Product7' },
  { id: 8, name: 'Product8' },
]

export const ProudctsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text
        style={{ marginBottom: 10, fontSize: 30, color: 'black' }}
      >Products</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})}
            label={item.name}
          />
        )}
      />

      <Text
        style={{ marginBottom: 10, fontSize: 30, color: 'black' }}
      >Ajustes</Text>

      <PrimaryButton 
        label='Ajustes'
        onPress={() => navigation.navigate('Settings')}
      />

    </View>
  )
}
