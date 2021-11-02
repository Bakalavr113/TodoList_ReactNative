import React, { useState } from "react";
import {
  StyleSheet,
  Header,
  View,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";
const HeaderComponent = ({onSubmit}) => {
    const [input, setInput] = useState("")
    const addPost =() =>{
        if(input){
            onSubmit(input.trim())
            setInput("")
        }
        else{
            Alert.alert("Ви не ввели жодного символа")
        }
        
    }
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Enter your Task</Text>
      <View style={styles.inputBlock}>
        <TextInput
        value={input}
        onChangeText={text=> setInput(text)}
          style={styles.input}
          maxLength={15}
          placeholder={"Enter text"}
          placeholderTextColor={"grey"}
        />
        <Button
        onPress={()=> addPost()}
          //   onPress={}
          title="Add"
          color={"white"}
          buttonStyle={styles.button}
          accessibilityLabel="add"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fff",
  },
  inputBlock: {
      marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  header:{
    alignItems: "center",
  },
  input: {
      width: "70%",
    fontSize: 20,
    color: "#fff",
     padding: 10,
    // marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});

export default HeaderComponent;
