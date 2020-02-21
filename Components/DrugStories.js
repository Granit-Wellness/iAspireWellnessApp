import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons'


function DrugStories(props){
    const {stories, drug, navigation } = props
    const drugStories = stories.filter(story => drug.id === story.drug )
    
    function onPressed(story){
        navigation.navigate(
          'DrugStory',
          { story: story}
        )
    };
    return(
    <View style={{display: 'flex', flexDirection:'column'}}>
        <View style={{paddingLeft: 30, display:'flex', flexDirection:'column', alignContent: 'center'}}>
            <Ionicons name="md-add-circle" size={50} color="green" onPress={() => navigation.navigate('AddStory')}/>
            <Text style={{fontSize:15, fontWeight: '300', paddingTop: 5, fontStyle: 'italic', paddingBottom: 5}}>Add Story</Text>
        </View>
        {drugStories.map(story => {
        return (
            <View key={story.id}>
                <Card title={story.title}>
                <View style={{display: 'flex', flexDirection:'column'}}>
                    <Text 
                        numberOfLines={5}
                        ellipsizeMode='tail'
                        style={{marginBottom: 10}}>
                        {story.entry ||'No Entry'}
                    </Text>
                    <TouchableOpacity 
                        style={styles.loginScreenButton}
                        onPress={() => onPressed(story)}
                        underlayColor='#fff'>
                    <Text style={styles.loginText}>See More</Text></TouchableOpacity>
                    </View>
                </Card>
            </View>
        )})
    }
</View>
    )}
const styles = StyleSheet.create({
    loginScreenButton:{
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        display: 'flex',
        flexDirection: 'column'
    },
    loginText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'

    },
    storyText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
})
export default DrugStories