
import React from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InscriptionScreen from './screens/InscriptionScreen';
import LoginScreen from './screens/LoginScreen';
import AllDiscussion from './components/AllDiscussion';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from './firebase';



const Stack = createNativeStackNavigator();

const signOut = () => {
  auth.signOut().then(() => {
      // Sign-out successful.
      navigation.replace('Connexion')
    }).catch((error) => {
      // An error happened.
    });
}


function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Inscription">
        <Stack.Screen 
          name="Inscription" 
          component={InscriptionScreen} 
          options={{
            title: "Inscription",
            headerStyle: {
              backgroundColor: '#fc5c65',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
                  <MaterialIcons name="more-vert" size={24} color="white" onPress={() => Alert.alert("information", 
                    "Voulez-vous consulter notre politique de gestion?", [
                      {text: "Avec plaisir"},
                      {text: "Non merci"},
                    ])}/>
            )
          }}
          />
        <Stack.Screen 
          name="Connexion" 
          component={LoginScreen} 
          options={{
            title: "Connexion",
            headerStyle: {
              backgroundColor: '#fc5c65',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <MaterialIcons name="more-vert" size={24} color="white" onPress={() => Alert.alert("information", 
                    "Voulez-vous consulter notre politique de gestion d'utilisateur?", [
                      {text: "Avec plaisir"},
                      {text: "Non merci"},
                    ])}/>
            )
          }}
          />
        <Stack.Screen 
          name="Discussions" 
          component={AllDiscussion}
          options={{
            title: "Discussions",
            headerStyle: {
              backgroundColor: '#fc5c65',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <View style={styles.headerIcons}>
                  <MaterialIcons name="search" size={24} color="white" 
                  style={styles.search}
                  />
                  <MaterialIcons name="logout" size={24} color="white" onPress={signOut}/>
              </View>
              
            ),
          }}
          />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
    headerIcons: {
      flexDirection: 'row',
      padding: 5,
    },
    search: {
      marginRight: 20
    }
})


