
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CardProdutos from './components/CardProdutos';
import CardBarraPesquisa from './components/CardBarraPesquisa';
import CardHome from './components/CardHome';
import CardMercados from './components/CardMercados';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import telaLogin from './components/screen/telaLogin';
import Home from './components/CardHome';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

function Home({navigation}){
  return (

    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen options={{headerShown: false}} name="Login" component={telaLogin} />}
        {<Stack.Screen name="Home" component={Home} />}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: '#E8E8E8',
  },
});

