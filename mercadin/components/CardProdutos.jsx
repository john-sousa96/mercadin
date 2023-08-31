import { Text, StyleSheet, View, Image } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export default function CardProdutos(props){
   return (
    <View style={styles.container}>
        <View style={styles.informationContainer}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <View style={styles.calories}> 
                <MaterialIcons style={styles.fire} name="local-fire-department"  />
                <Text style={styles.caloriesText}>{props.calories} Calories</Text> 
            </View>
            <Text style={styles.value}>${props.value}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Image style={styles.icon} source={props.icon}></Image>
        </View>
    </View>
   )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',       margin: 10,      flexDirection: "row",      borderRadius: 20,      flexWrap: 'wrap',      flexGrow: 1
    },
    informationContainer:{
        alignItems: 'left',        margin: 15
    },
    titulo: {
        fontSize: 25,        textAlign: 'left',        fontWeight:'bold'
    },
    fire:{
        size:10,        color:"red",        margin: 5
    },
    calories:{
        flexDirection: "row"
    },
    caloriesText:{
        fontSize: 10,        color: '#989898',        paddingTop: 5
    },
    value:{
        fontSize: 15,        color: '#FFCC00',        fontWeight:'bold'
    },
    icon: {
        width: 90,        height:70,        justifyContent: 'flex-end'
    },
    iconContainer:{
        marginRight: 0,        marginLeft: 70,        marginTop: 20
    }
  });