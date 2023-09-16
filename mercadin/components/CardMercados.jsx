import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from "react-native"
import React , {useState , useEffect} from "react";
import { MaterialIcons } from '@expo/vector-icons';
import database from "../src/config/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

export default function CardMercado()  {
    const [mercados, setMercados] = useState([])
    const mercadosCollectionRef = collection(database,"mercados"); 
    
    useEffect(()=>{
     const getMercados = async () =>{
        const data = await getDocs(mercadosCollectionRef);
        console.log(data.docs.map( (doc) => ({...doc.data(), id: doc.id})));
        setMercados(data.docs.map( (doc) => ({...doc.data(), id: doc.id})));
    };
    getMercados();
    },[]); 

    const Item = ({ mercado, endereco,imagem,economize }) => (
        <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} source={imagem}></Image>
                     </View>
                    
                    <View style={styles.informationContainer}>
                        <Text style={styles.mercado}>{mercado}</Text>
                        <Text style={styles.endereco}>{endereco}</Text>
                        <Text style={styles.economize}>Economize até {economize}%</Text>
                            
                    </View>

                </View>
         </View>
      );

      const renderItem = ({ item }) => (
        <Item mercado={item.mercado} endereco={item.endereco} imagem={item.imagem} economize={item.economize}  />
      )

    return (
        <View style={styles.Outercontainer}>
            <Text style={styles.titulo}>Mercados por ordem de mais barato</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={mercados}
            renderItem={renderItem}
            keyExtractor={item=> item.id}
            
            />
        </View>
   )
}
const styles = StyleSheet.create({
    Outercontainer: {
        flexDirection: "column",
        flexWrap: 'wrap',
        backgroundColor: '#fff',       
        margin: 10,   
        borderRadius: 30,  
          
        
    },
    container: {
      flexDirection: "row",      
       
      flexWrap: 'wrap',      
      flexGrow: 1
    },
    titulo: {
        color: '#e54304',
        justifyContent: 'center',
        fontSize: 15,        
        textAlign: 'center',        
        fontWeight:'bold',


    },
    innerContainer: {
        backgroundColor: '#fff2df',       
        margin: 10,      
        flexDirection: "row",      
        borderRadius: 20,      
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