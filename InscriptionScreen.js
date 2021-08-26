import React, {useState} from 'react';
import { View, 
         Text, 
         Image,
         Button, 
         StyleSheet } from 'react-native';
import { auth } from '../firebase'
import { Input } from 'react-native-elements'


function InscriptionScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const inscription = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name,
                    //photoURL: "https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black.png"
                }).then(() => {
                // Update successful
                // ...
                }).catch((error) => {
                // An error occurred
                // ...
                });
                navigation.replace('Discussions');
                //alert('compte creer avec succes')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }


    return (
      <View style={styles.container}>
            <Image source={require('../assets/messages.png')} style={styles.logo}/>

            <Input 
                placeholder="Entrez votre nom..." 
                leftIcon={{ type:'material', name:'person', color:'#cccccc' }}
                onChangeText={text => setName(text)}
                value={name}
                inputContainerStyle={styles.Input1} 
            />
            <Input 
                placeholder="Entrez votre e-mail..." 
                leftIcon={{ type:'material', name:'email', color:'#cccccc'} }
                value={email}
                onChangeText={text => setEmail(text)}
                inputContainerStyle={styles.Input}
            />
            <Input 
                placeholder="Mot de passe..." 
                leftIcon={{ type:'material', name:'lock', color:'#cccccc' }}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
                inputContainerStyle={styles.Input}
            />
            <Input 
                placeholder="Confirmation mot de passe..." 
                leftIcon={{ type:'material', name:'lock', color:'#cccccc' }}
                onChangeText={text => setConfirmPass(text)}
                value={confirmPass}
                secureTextEntry
                inputContainerStyle={styles.Input}
            />
            <View style={styles.btnConnexion}>
                <Button 
                    color="#fc5c65" 
                    title="je m'incris" 
                    onPress={inscription} />
            </View>
            
            <Text onPress={() => navigation.navigate('Connexion')} style={styles.lien}>
                Déjà inscris? Connectez-vous.
            </Text>
      </View>
    );
  }

  export default InscriptionScreen


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
    btnInscription: {
        color: '#fc5c65'
    },
    lien: {
        fontWeight: "600"
    }
  })