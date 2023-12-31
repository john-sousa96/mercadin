import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CardProdutos from "../components/CardProdutos";
import { NavigationContainer } from '@react-navigation/native';



import 'react-native-gesture-handler';


const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, navigation}) => {
  

 setClicked = false;
  return (
        <View style={styles.container}>
           
            <StatusBar barStyle='light-content'> </StatusBar>
            <View style={styles.header}>
               
            <View
                style={
                clicked
                    ? styles.searchBar__clicked
                    : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                name="search"
                size={25}
                color="black"
                style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                style={styles.input}
                placeholder="'Arroz'"
                value={searchPhrase}
                onChangeText={ ()=> {setSearchPhrase}}
                onFocus={() => {
                setClicked = true;
                
                }}
                >
                  
                </TextInput>
                
               
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                <Entypo name="cross" size={10} color="black" style={{ padding: 1 }} onPress={() => {
                    setSearchPhrase("")
                }}/>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                    }}
                ></Button>
                </View>
            )}
            </View>
        </View>
  );
};
export default SearchBar;


// styles
const styles = StyleSheet.create({
  container: {
   //flex: 1,
   backgroundColor: "#FFA500",
   //width: "100%" ,
   //height: 100,
   //marginBottom: 100

  },

  header:{
   // position: 'absolute',
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "70%",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});