import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, ScrollView, Alert } from 'react-native';
import { theme } from './color';
import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';

const STORAGE_KEY = "@todos";
const DOMAIN_KEY = "@domain";

export default function App() {

  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});
  const travel = async () => {
    try {
      await AsyncStorage.setItem(DOMAIN_KEY, JSON.stringify(!working));
    } catch (e) {
      alert("Saving Error...");
    }
    setWorking(false); 
    Keyboard.dismiss(); 
    setText("");
  }
  const work = async () => {
    try {
      await AsyncStorage.setItem(DOMAIN_KEY, JSON.stringify(!working));
    } catch (e) {
      alert("Saving Error...");
    }
    setWorking(true); 
    Keyboard.dismiss(); 
    setText("");
  }
  const onChangeText = (payload) => setText(payload);
  const saveTodos = async (toSave) => {
    try {
      const jsonValue = JSON.stringify(toSave);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      alert("Saving Error...");
    }
  }
  const loadTodos = async () => {
    const jsonVal = await AsyncStorage.getItem(STORAGE_KEY);
    if (jsonVal) {
      setTodos(JSON.parse(jsonVal));
    }

    const domain = await AsyncStorage.getItem(DOMAIN_KEY);
    if (domain) {
      setWorking(JSON.parse(domain));
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  const addToDo = async () => {
    if(text === "") return;

    // save to do
    const newTodos = {...todos, [Date.now()] : { text, working, done: false}};
    setTodos(newTodos);
    await saveTodos(newTodos);
    setText("");
  }
  const deleteTodo = async (key) => {
    Alert.alert(
      "Delete To Do", 
      "Are you sure?", [
      {text: "Cancel"},
      {
        text: "I'm sure", 
        style: "destructive",
        onPress: () => {
          const newTodos = {...todos};
          delete newTodos[key];
          setTodos(newTodos);
          saveTodos(newTodos);
        },
      },
    ]);
  }
  const completeTodo = (key) => {
    const isDone = todos[key].done;
    const newTodos = {...todos};
    
    newTodos[key] = {...newTodos[key], done: isDone ? false : true};
    
    setTodos(newTodos);
    saveTodos(newTodos);
  }
  const modifyTodo = (key) => {

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
        <ScrollView>
          {todos && Object.keys(todos).map(key => 
            todos[key].working === working ? 
              <View style={styles.todo} key={key}>
                <Text style={styles.todoText}>{todos[key].text}</Text>
                <TouchableOpacity onPress={() => completeTodo(key)}>
                  <Fontisto name="check" size={18} color={todos[key].done ? "green" : "gray"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => modifyTodo(key)}>
                  <Fontisto name="eraser" size={18} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(key)}>
                  <Fontisto name="trash" size={18} color="gray" />
                </TouchableOpacity>
              </View> : null
            ) 
          }
        </ScrollView>
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
    marginVertical: "5%",
    fontSize: 15,
  },
  todo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  }
});
