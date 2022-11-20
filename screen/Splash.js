import { View, Text, Pressable, Image } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {
    const onPress = () =>{
        navigation.navigate('Home')
    }
 
  return (
    <View>
         <Pressable onPress={onPress}>
            <View style={{height: "100%", alignItems: "center", backgroundColor: "#5837D0"}}>
              <View style={{flex : 0.95, justifyContent: "center", alignItems:'center'}}>
                    <Image source={require('../img/logo.png')} style={{ width: 200, height: 200}}/>
                    <Text style={{color: "white",fontSize: 20,fontWeight: "normal" ,fontWeight:"800"}}>Click me</Text>
              </View>
              <View style={{flex : 0.05}}>
                      <Text style={{ color: "white"}}>Deepdo.co</Text>
              </View>
            </View>
        </Pressable>
      
    </View>
  )
}

export default Splash