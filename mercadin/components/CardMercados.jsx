import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList, Button } from "react-native"
import React , {useState , useEffect} from "react";
import database from "../src/config/firebaseconfig";
import {
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
  } from 'firebase/firestore';
  



export default function CardMercado()  {
    const colletionRef = collection(database, 'mercados');
    const [mercados, setMercados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [economize, setEconomize] = useState([]);
    const [imagem, setImagens] = useState([]);

    useEffect(() => {
        const q = query(
          colletionRef,
         orderBy('economize', 'desc'), 
        );
        const b = query(
            colletionRef,
            orderBy('economize', 'desc'), 
            limit(1)
          );
    
        setLoading(true);
        const unsub = onSnapshot(q, (querySnapshot) => {
          const items = [];
          const maisBarato = [];
          querySnapshot.forEach((doc) => {
          items.push({...doc.data(), id: doc.id});  
          });
          setMercados(items);
          console.log(items);
          setLoading(false);
        });
        const unsub2 = onSnapshot(b, (querySnapshot) => {
            const maisBarato = [];
            querySnapshot.forEach((doc) => {
            maisBarato.push({...doc.data(), id: doc.id}); 
            });
            setEconomize(maisBarato);
            console.log(maisBarato); 
            setLoading(false);
          });

        return () => {
          unsub();
          unsub2();
        };
        
       
      }, []);



   
    const Item = ({id, mercado, endereco,imagem,economize }) => (
        <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} ></Image>
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
        <Item id={item.id} mercado={item.mercado} endereco={item.endereco} imagem={item.imagem} economize={item.economize}  />
      )

    return (
        <View>
            <View style={styles.Outercontainer}>
            <Text style={styles.titulo}>Melhor opção de mercado da sua região</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={economize}
                renderItem={renderItem}
                keyExtractor={item=> item.id} />
            </View>
           
           
            <View style={styles.Outercontainer}>
                <Text style={styles.titulo}>Mercados por ordem de mais barato</Text>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={mercados}
                renderItem={renderItem}
                keyExtractor={item=> item.id}
                
                />
            </View>
        </View>
   )
}
const styles = StyleSheet.create({
    Outercontainer: {
        flexDirection: "column",
        flexWrap: 'wrap',
        backgroundColor: '#fff',       
        margin: 15,   
        borderRadius: 30, 
        justifyContent: 'center', 
          
        
    },
    container: {
      flexDirection: "row",     
      flexWrap: 'wrap',      
      flexGrow: 1,
      width: '100%'
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