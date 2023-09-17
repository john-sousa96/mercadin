import { Text, StyleSheet, View, Image,  FlatList, Button } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import database from "../src/config/firebaseconfig";
import React, { useState, useEffect, Fragment, useContext } from 'react';
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


export default function CardProdutos(props){
    const colletionRef = collection(database, 'produtos');
    const [produtos, setProdutos] = useState([]);
    const [valor, setValor] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const q = query(
          colletionRef,
          orderBy('valor', 'asc'), 
        );
    
        setLoading(true);
        const unsub = onSnapshot(q, (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
        items.push({...doc.data(), id: doc.id});
          
          });
          setProdutos(items);
          console.log(items); 
          setLoading(false);
        });
        return () => {
          unsub();
          
        };
        
        
      }, []);

      const Item = ({id, mercado, endereco, produto, valor, imagem }) => (
       
        <View style={styles.innerContainer}>
         <View style={styles.iconContainer}>
                 <Image style={styles.icon} source={imagem}></Image>
             </View>
         
             <View style={styles.informationContainer}>
                 <Text style={styles.mercado}>{mercado}</Text>
                 <Text style={styles.endereco}>{endereco}</Text>
                 <Text style={styles.produto}>{produto}</Text>
                 <Text style={styles.value}>R$ {valor}</Text>
             </View>
 
         </View>
      );

      const renderItem = ({ item }) => (
        <Item id={item.id} mercado={item.mercado} endereco={item.endereco} imagem={item.imagem} produto={item.produto} valor={item.valor}  />
      )

    
  
    return (
    <View style={styles.container}>
      <FlatList
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={renderItem}
                keyExtractor={item=> item.id} />
        
       
    </View>
   )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',       
      margin: 10,      
      flexDirection: "row",      
      borderRadius: 30,      
      flexWrap: 'wrap',      
      flexGrow: 1
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
        fontSize: 15,        
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
    produto: {
        fontSize: 20,        
        textAlign: 'left',        
        fontWeight:'bold',
        color: '#f47100',
    },
  
    value:{
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