import React from 'react'
import {Button, 
        View, 
        TextInput, 
        Text, 
        StyleSheet, 
        FlatList, 
        Image, 
        Dimensions} from 'react-native'

import { discussionList } from '../data/Discussion';
import DiscussionItem from './DiscussionItem';



const d = new Date()

function AllDiscussion() {
    
        
        return(

                <View style={styles.container} >
            

                    <FlatList 
                        data={discussionList}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <DiscussionItem discussion={item} />  }
                        style={styles.flatlist}
                    />

                    <View style={styles.main_bar}>
                        <Image source={require('../assets/home.png')} style={styles.main_bar_item1}/>
                        <Image source={require('../assets/contact-book.png')} style={styles.main_bar_item}/>
                        <Image source={require('../assets/email.png')} style={styles.main_bar_item}/>
                        <Image source={require('../assets/telephone.png')} style={styles.main_bar_item}/>
                        <Image source={require('../assets/video-camera.png')} style={styles.main_bar_item}/>
                    </View>
                    
                </View>
                
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      flexDirection: 'column'
    },
    flatlist: {
        marginBottom: 20
    },
    itemcontact: {
        fontSize: 15,
    },
    copyright: {
        marginBottom: 20
    },
    main_bar: {
        flexDirection: 'row',
        padding: 2,
        backgroundColor: '#ffffff',
        width: "100%",
        height: "10%",
        alignContent: 'center',
        
    },
    main_bar_item1: {
        width: 28,
        height: 28,
        marginRight: "8%",
        marginStart: "12%",
        marginLeft: "10%",
        marginTop: "3%"
    },
    main_bar_item: {
        width: 28,
        height: 28,
        marginRight: "8%",
        marginStart: 5,
        marginTop: 10
    }
   
    
  });


export default AllDiscussion;