import { View, Text, Image, Button, Linking, ScrollView} from 'react-native'
import React, { useEffect, useState, useCallback} from 'react'


const Detail = ({route}) => {
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    //API Whether
    // const keyAPI = "c9ce9ffd-8087-4a89-b317-5db87dcae139"
    // const [whether, setWhether] = useState({})


    // const styles = StyleSheet.create({
    //     container: { marginTop: 10 }
    // });


    useEffect(() => {
        setIsLoading(true)
       console.log(route.params.id)
      fetch("https://touring-api-6zg2g5ozxq-uc.a.run.app/product/"+route.params.id)
      .then(res => res.json())
      .then(result => {
        setItem(result)
        console.log(result)
        
        setIsLoading(false)
      })
    }, []) 

    // useEffect(() => {
    //     fetch('https://api.airvisual.com/v2/nearest_city?lat='+item.latitude+'&lon='+item.longitude+'&key='+keyAPI)
    //     .then(res => res.json())
    //     .then(result => {
    //       console.log(result.whether)
    //       setWhether(result.whether)
    //     })
    //   }, [])
    const renderItem = () => (
        <ScrollView>
            
                <Image source={{ uri: item.image }} style={{ width: "100%", height: 333 }}/>
                        
                        <Text style={{ fontSize: 20,marginTop: 10, marginLeft:20,fontSize: 15,fontWeight: 'bold' }}>
                            {item.name}
                        </Text>
                        <Text style={{ padding: 5 ,marginRight: 20, marginLeft:19,fontSize:13.8,marginBottom: 7,fontWeight:"330"}}>
                            {item.detail}
                        </Text> 
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <View style={{width: 300, height: 300}}>
                                <Button 
                                    onPress={onPressMap}
                                    title="กดดูแผนที่"
                                    color="#841584"   
                                />
                            </View>
                        </View>
        </ScrollView>
    );

    const onPressMap = useCallback(async () => {
        await Linking.openURL('https://map.google.com?q='+item.latitude+','+item.longitude);
    })

    return (
        <View>
            {  isLoading ?
                <Text>
                    Loading
                </Text>
            : 
           
                renderItem()
            
    }
        </View>
    )   
}

export default Detail

 /* <Text style={{ fontSize: 20, padding: 5 }}>{item.name}</Text>
            <Text style={{ padding: 5}}>    {item.detail}</Text> */
            /* <Text style={{ padding: 5}}>{item.latitude},{item.longitude}</Text> */
            /* <Image source={Images[route.params.id]} style={{ width: "100%", height: 333}}></Image> 
            <Text style={{ fontSize: 20, marginTop: 10, padding: 10}}>{route.params.name}</Text> */