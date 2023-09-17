import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native-web'
import { TextInput } from 'react-native-gesture-handler'
import {firebaseConfig} from '../../firebase'
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const telaLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    const navigation = useNavigation();

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Criou!")
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
            alert(error.message)
            Alert.alert(error.message)
        })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Logou!")
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
        })
        .catch(error => {
            console.log(error)
            alert(error.message)
            Alert.alert(error.message)
        })
    }


  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View >
        <Image source={require('../../assets/orange.png')} style={styles.imageContainer} />
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter your Email'
               value={email}
               onChangeText={ text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
               value={password}
               onChangeText={ text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleCreateAccount}
                style={[styles.button, styles.buttonOutLine]}
            >
                <Text style={styles.buttonOutLineText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default telaLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        backgroundColor: '#E5B846',
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        padding: 10

    },
    buttonOutLine: {
        marginTop: 5
    },
    buttonOutLineText: {

    },
    buttonText: {
        color: 'white'
    },
    imageContainer: {
        width: 250,
        height: 250
    }
})