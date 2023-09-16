import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import CardProdutos from './components/CardProdutos';
import CardBarraPesquisa from './components/CardBarraPesquisa';
import CardHome from './components/CardHome';
import CardMercados from './components/CardMercados';


export default function App() {
  return (
    <View>
      <CardBarraPesquisa></CardBarraPesquisa>
      <ScrollView style={styles.containerApp}>
        
        <CardProdutos   
          mercado = {'Mercado ABC'}
          endereco = {'Rua das Margaridas, 1234, São Paulo - SP'}
          produto={'Arroz marca Xpto - 1kg'} 
          value={'5.73'} 
          icon={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblfr3-Ei1-R19mSwotmODjlyjhDl0e1S2eIjL9QEwTQc0a8UjzHQE3nqNdb5Wy6T2nBI&usqp=CAU'}}
          > 
        </CardProdutos>

        <CardMercados>
          
         </CardMercados>

    </ScrollView>
</View>


  );
}

const styles = StyleSheet.create({
  containerApp: {
    backgroundColor: '#E8E8E8',
  },
});
