import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../../config/theme/theme';
import { useEffect } from 'react';

export const ProductScree = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  useEffect(()=>{

    navigation.setOptions({
      title: params.name
    })

  },[])

  return (
    <View style={globalStyles.container}>
      <Text style={{color: 'black'}}>Product screen</Text>

      <Text style={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
      }}>
        { params.id } - {params.name}
      </Text>
    </View>
  )
}
