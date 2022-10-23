import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { theme } from './color';
import React, { useState } from 'react';

export default function App() {

  const [working ,setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  const travel = () => {setWorking(false); Keyboard.dismiss(); setText("");}
  const work = () => {setWorking(true); Keyboard.dismiss(); setText("");}
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if(text === "") return;

    // save to do
    const newTodos = Object.assign(
      {}, 
      todos, 
      {[Date.now()]: {text, work: working}, 
    });
    setTodos(newTodos);
    setText("");
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white" : theme.grey}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput 
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType="done"
          value={text}
          placeholderTextColor="grey"
          placeholder={working ? "Add a To Do" : "Where do you wanna go?"}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: "40%",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: "5%",
    fontSize: 15,
  },
});
