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


import CardMercados from './CardMercados';
import CardBarraPesquisa from "./CardBarraPesquisa";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";



const Home = ({ navigation }) => {
 

  return (
    <View>
      <CardBarraPesquisa></CardBarraPesquisa>
      <CardMercados></CardMercados>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
 
});