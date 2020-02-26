import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'


class AddStory extends Component {
    constructor(props){
        super(props)
        this.state = {
            type: 'General',
            drug: this.props.navigation.state.params.drug
        }
        this.updateType = this.updateType.bind(this)
        this.submitType = this.submitType.bind(this)
    }
   updateType = (type) => {
      this.setState({ type: type })
   }
   submitType = () => {
       (this.props)
       this.props.navigation.navigate('AuthorInfo', 
       { type: this.state.type,
        drug: this.state.drug}
    )}
   render() {
      return (
        <ScrollView style={styles.container}>
            <View style={styles.pickerContainer}>
            <Text style={styles.title}>What kind of story would you like to share?</Text>
                <Picker style={styles.picker}selectedValue = {this.state.type} onValueChange = {this.updateType}>
                    <Picker.Item label = "General" value = "General" />
                    <Picker.Item label = "First Time" value = "First Time" />
                    <Picker.Item label = "Difficult Experience" value = "Difficult Experience" />
                    <Picker.Item label = "Glowing Experience" value = "Glowing Experience" />
                    <Picker.Item label = "Addiction" value = "Addiction" />
                    <Picker.Item label = "Rehabilitation" value = "Rehabilitation" />
                    <Picker.Item label = "Combination" value = "Combination" />
                </Picker>
                <View style={styles.submitContainer}>
                    <Text style = {styles.text}>{this.state.type}</Text>
                    <Ionicons 
                        style={styles.icon}name="md-arrow-round-forward" 
                        size={40} 
                        color="green" 
                        onPress={this.submitType}/>
                </View>
            </View>
        </ScrollView>
      )
   }
}
export default AddStory


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    pickerContainer: {
        marginTop: 100,
        flex: 1,
    },
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'green',
    },
    submitContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        paddingTop: 5,
        paddingLeft: 5,
        alignSelf: 'center'
    },
    title: {
        fontSize:24, 
        fontWeight: '400',
        textAlign: 'center'
    },
 })