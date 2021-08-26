import React, {useEffect, useState} from 'react';
import { Button, 
         View, 
         Text, 
         Image, 
         StyleSheet, 
         TextInput } from 'react-native';
import { auth } from '../firebase'
import { Input } from 'react-native-elements'


function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged
        (function(user) {
            if (user) {
            // User is signed in, 
                navigation.replace('Discussions');
            // ...
            } else {
            // User is signed out
            //navigation.canGoBack() && navigation.popToTop()
            }
        });
        return unsuscribe
    }, [])
    


    return (
      <View style={styles.container}>
        <Image source={require('../assets/messages.png')} style={styles.logo}/>
        <Text>Connexion a mon compte</Text>

        <Input 
            placeholder="E-mail" 
            leftIcon={{ type:'material', name:'email', color:'#bababa'} }
            value={email}
            onChangeText={text => setEmail(text)}
            inputContainerStyle={styles.Input1} 
        />
        <Input 
            placeholder="Mot de passe"
            leftIcon={{ type:'material', name:'lock', color:'#bababa'} }
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            inputContainerStyle={styles.Input}
        />
        <View style={styles.btnConnexion}>
            <Button color="#fc5c65" title="Se connecter" onPress={signIn}/>
        </View>
        
        <Text onPress={() => navigation.navigate('Inscription')} style={styles.lien}>
            Vous n'avez pas de compte? Créer-en un.
        </Text>

        
        
      </View>
    );
  }

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 60,
        height: 60
    },
    Input1: {
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 20,
        marginTop: 5,
        width: "95%",
        height: 40,
        marginStart: 7,
        paddingLeft: 7,
        backgroundColor: '#ffffff'
    },
    Input: {
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 20,
        width: "95%",
        height: 40,
        marginStart: 7,
        paddingLeft: 7,
        backgroundColor: '#ffffff'
    },
    btnConnexion: {
        marginBottom: 10,
        marginTop: 5
    },
    lien: {
        fontWeight: "600"
    }
})