import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'



class DiscussionItem extends React.Component {
    render() {
        
        const discussion = this.props.discussion


        return(

            <View style={styles.main_view}>

                <Image source={require('../assets/user.png')} style={styles.avatar}/>

                <View style={styles.infodiscussion}>
                    <Text style={styles.nom}> {discussion.name}</Text>
                    <Text style={styles.message}> {discussion.message}</Text>
                    
                </View>
                <View style={styles.times}>
                    <Text style={styles.time}> {discussion.time} </Text>
                </View>
                
            </View>

        )
    }
}

export default DiscussionItem


const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        flexDirection: 'row'
    },
    infodiscussion: {
        flexDirection: 'column',
        marginBottom: 20,
        width: 170
    },
    avatar: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    times: {
        flexDirection: 'row',
        marginTop: 10,
        
    },
    nom: {
        marginBottom: 3,
        fontWeight: 'bold'
    }
    
});