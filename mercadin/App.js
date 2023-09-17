
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CardProdutos from './components/CardProdutos';
import CardBarraPesquisa from './components/CardBarraPesquisa';
import CardHome from './components/CardHome';
import CardMercados from './components/CardMercados';
import { NavigationContainer, DefaultTheme  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';



function Home({navigation}){
  return (
      <CardHome></CardHome>
  );
}

function Produtos({navigation}){
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

 function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name="Root"
        component={Root}
       />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;

const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: '#E8E8E8',
  },
});
