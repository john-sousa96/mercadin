import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import CardProdutos from './CardProdutos';
import CardMercados from './CardMercados';
import CardBarraPesquisa from "./CardBarraPesquisa";

import { createDrawerNavigator } from '@react-navigation/drawer';

function Produtos(props){
  return (
      <CardProdutos></CardProdutos>
  );
}

function Root() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} options={{
          headerTintColor: "#fff",
          headerBackground: () => <View style={{flex: 1, backgroundColor: "#FFA500"}} />,
        }} />
      <Drawer.Screen name="Produtos" component={Produtos} options={{
          headerTintColor: "#fff",
          headerBackground: () => <View style={{flex: 1, backgroundColor: "#FFA500"}} />,
        }} />
     
    </Drawer.Navigator>
  );
}


const Home = ({ navigation }) => {
 
  return (
    <View>
      <CardBarraPesquisa></CardBarraPesquisa>
      <CardMercados></CardMercados>
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({
 
});