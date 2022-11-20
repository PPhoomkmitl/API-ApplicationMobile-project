import { View, Text, FlatList, Image, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect,useCallback } from 'react'
import { Searchbar } from 'react-native-paper'

const Home = ({navigation}) => {
    
   

    const [items, setItems] = useState([])
    const [count,setCount] = useState('')
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const onChangeSearch = query => setSearchQuery(query);

    const onPressItem = (id) =>{
        navigation.navigate('Detail',{id: id})
    }
    

    const onSearch = useCallback(async () => {
        console.log("searchQuery"+searchQuery)
        setIsLoading(true)
        setItems([])


        await fetch("https://touring-api-6zg2g5ozxq-uc.a.run.app/product/search/"+searchQuery)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            setItems(result)
            setIsLoading(false)
        })
    })
    
   

    //Product
    useEffect(() => {
        if(searchQuery == ''){
            fetch("https://touring-api-6zg2g5ozxq-uc.a.run.app/product")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setItems(result)
                setIsLoading(false)
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
                });
        }
       
    }, [searchQuery])
    
    
    

   //FlatList
    const renderItem = ({ item }) => (
        <Pressable onPress={() => onPressItem(item.id)} key={item.id}>
            <View style={{ margin: 47, marginTop:-10, backgroundColor:"#fff", borderRadius: 9.6, borderWidth: 0.5 }}>
                <Image source={{ uri: item.image }} style={{ width: "100%", height: 329, borderTopLeftRadius:9.6, borderTopRightRadius:9.6 }}/>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontWeight: "550", height:35 }}>{item.detail}</Text>
                </View>
                <Text style={{ textAlign:'center', backgroundColor:"#C689C6", borderBottomLeftRadius:9.6, borderBottomRightRadius:9.6, fontWeight:"bold", width:299, height:25 }} >กดเพื่อดูเพิ่มเติม</Text>
                
            </View>
        </Pressable>
      
    );

    
    return (
      <View style = {{backgroundColor:"#6C4AB6", height:"100%", paddingTop:20 , paddingBottom:10}} >
          <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onIconPress={() => onSearch()}
          onSubmitEditing={() => onSearch()}
          style={{backgroundColor:"#8D9EFF", margin:10}}
        /> 
        {  isLoading ?
           <View style={{height: "100%", alignItems: "center", backgroundColor: "#5837D0"}}>
                <View style={{flex : 0.95, justifyContent: "center", alignItems:'center', marginBottom:10}}>
                    
                    <Image source={require('../img/logo.png')} style={{ width: 200, height: 200}}/>
                    <Text style={{color: "white", fontSize: 50, fontWeight: "normal" , fontWeight:"800"}}>Loading</Text>
                </View>
         </View>
        : 
        <>  
      
      
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id} 
            />
        
            
        </>

        }
       
       </View>
     )
 }

 export default Home

