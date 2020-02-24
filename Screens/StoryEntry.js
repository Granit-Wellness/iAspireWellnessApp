import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import { Card } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios';



class StoryEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {...this.props.navigation.state.params.state, entry: 'Your Story Here', title: 'Your Title Here'}
        this.updateEntry = this.updateEntry.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    updateEntry = (text) => {
        this.setState({ entry: text })
     }

    updateTitle = (text) => {
        this.setState({ type: text })
     }

    onSubmit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/drugs/drug_stories/', {
            drug: 1,
            title: this.state.title,
            author: this.state.name,
            gender: this.state.gender,
            dose: this.state.dose,
            body_weight: this.state.wieght,
            age_at_time_of_experience: this.state.age_at_time_of_experience,
            story_type: this.state.type,
            entry: this.state.entry
        })
        this.props.navigation.navigate('PlantInfo')
          } catch (error) {
            console.error(error);
          }
    }

     render(){
        return (
            <View style={{flex: 1}}>
                <View style={{ marginTop: 10}}>
                    <Card style={{ height: '100%'}}>
                        <TextInput
                            style={{ height: 40, fontSize: 30 }}
                            onChangeText={text => this.updateTitle(text)}
                            placeholder={this.state.title}
                            />
                    </Card>
                </View>
                <View style={{flex: 3, marginTop: 0, borderTop:0 }}>
                    <Card containerStyle={{height: '100%'}}>
                        <TextInput
                            style={{
                                fontSize: 30,
                            }}
                            placeholder={'Tell us your story...'}
                            onChangeText={text=>this.updateEntry(text)}
                            multiline={true}
                            underlineColorAndroid='transparent'
                    />
                    </Card>
                </View>
                    <View style={styles.submitContainer}>
                        <Text style = {styles.text}>Enter Story</Text>
                        <Ionicons 
                            style={styles.icon}name="md-arrow-round-forward" 
                            size={40} 
                            color="green" 
                            onPress={this.onSubmit}/>
                    </View>
            </View>
         )
     }
}


const styles = StyleSheet.create({
    title: {
        fontSize:24, 
        fontWeight: '400',
        textAlign: 'center'
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'green',
     },
     submitContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    icon: {
        paddingTop: 5,
        paddingLeft: 5,
        alignSelf: 'center'
    },
})
export default StoryEntry