import { Text, StyleSheet, View, Image } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export default function CardMercado(props){
   return (
    <View style={styles.Outercontainer}>
        <Text style={styles.titulo}>Mercados por ordem de mais barato</Text>
        <View style={styles.container}>
            
        <View style={styles.innerContainer}>
            <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={props.icon}></Image>
                </View>
            
                <View style={styles.informationContainer}>
                    <Text style={styles.mercado}>{props.mercado}</Text>
                    <Text style={styles.endereco}>{props.endereco}</Text>
                    <Text style={styles.economize}>Economize até {props.economize}%</Text>
                    
                </View>

            </View>
        </View>   
    </View>
   )
}
const styles = StyleSheet.create({
    Outercontainer: {
        flexDirection: "column",
        flexWrap: 'wrap',
    },
    container: {
      backgroundColor: '#fff',       
      margin: 10,      
      flexDirection: "row",      
      borderRadius: 30,      
      flexWrap: 'wrap',      
      flexGrow: 1
    },
    titulo: {
        color: '#fff2df', 

    },
    innerContainer: {
        backgroundColor: '#fff2df',       
        margin: 10,      
        flexDirection: "row",      
        borderRadius: 40,      
        flexWrap: 'wrap',      
        flexGrow: 1

    },
    informationContainer:{
          
        marginLeft: 5,
        justifyContent: 'center'
    },
    mercado :{
        fontSize: 20,        
        textAlign: 'left',        
        fontWeight:'bold',
        color: '#e54304',

    },
    endereco: {
        fontSize: 10,        
        textAlign: 'left',
        fontWeight:'regular',
        color: '#e54304',
    },
    economize:{
        fontSize: 15,        
        color: '#008b00',        
        fontWeight:'bold'
    },
    icon: {
        width: 90,        
        height:90,        
        justifyContent: 'flex-start',
        borderRadius:40,
    },
    iconContainer:{
                
        marginLeft: 20,        
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'flex-start'
    }
  });