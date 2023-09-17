
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CardProdutos from './components/CardProdutos';
import CardBarraPesquisa from './components/CardBarraPesquisa';

import CardMercados from './components/CardMercados';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './components/screen/telaLogin';
import CardHome from './components/CardHome';
import Home from './components/CardHome';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

export default function App(){
  return (

    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen options={{headerShown: false}} name="Login" component={TelaLogin} />}
        {<Stack.Screen options={{headerShown: false}} name="Home" component={Home} />}
      </Stack.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: '#E8E8E8',
  },
});

