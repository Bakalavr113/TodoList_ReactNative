import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView, FlatList,TouchableOpacity,Alert} from 'react-native';
import HeaderComponent from './components/Header';
export default function App() {
  const [post, setPost] = useState([])
  const onSubmit =(value) =>{
    const newPost ={
      id: Date.now().toString(),
      title: value
    }
    setPost(prev =>[...prev,newPost] )
  }
  const deletePost = (id) => {
    setPost(post.filter(el => el.id !== id ))
  }
  return (
    <View style={styles.container}>
          <StatusBar style="light" />
      <HeaderComponent onSubmit={onSubmit}/>
      
    {/* <ScrollView alignItems={"center"} style={styles.list} >
      {post && post.map(el=> <Text style={styles.item} key={el.id}>{el.title}</Text>)}
    
    </ScrollView> */}
    <FlatList
    
    data={post} renderItem={({item}) =>(
      <TodoItem  deletePost={deletePost} item={item} />
    )} keyExtractor={item => item.id}
    />
    </View>
  );
}
const TodoItem =({item,deletePost}) =>{
  return (
<TouchableOpacity onPress={() => deletePost(item.id)}><Text style={styles.item}>{item.title}</Text></TouchableOpacity>
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    padding: 5,
    borderWidth: 2,
    fontSize:20,
    borderColor: "white",
    width: "100%",
    marginTop: 10,
    color: "#fff",
  },
  list:{
      marginTop: 20,
      // borderWidth: 2,
      // borderColor: "white",
      width: "100%",
      // alignItems: 'center',
  },
  text:{
    fontSize: 30,
    color: "#fff",
  },
});
