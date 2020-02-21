import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RadioGroup, { Radio } from "react-native-radio-input";
import { Card, Image, Divider } from 'react-native-elements'

class AuthorInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: this.props.navigation.state.params.type,
            gender: '',
            weight: 0,
            dose: '',
            age_at_time_of_experience: 0,
        }
        this.checkGender = this.checkGender.bind(this)
    }
    checkGender = (value) => {
        this.setState({ gender: value})
    }

    enterWeight = (value) => {
        this.setState({weight: value})
    }
    enterAge = (value) => {
        this.setState({age_at_time_of_experience: value})
    }
    enterDose = (value) => {
        this.setState({dose: value})
    }
    makeWeightRange = (start, end) => {
        const result = []
        for (let i = start; i <= end; i++){
            result.push(i)
        }
        return result
    }
    onSubmit(state){
        this.props.navigation.navigate(
          'StoryEntry',
          { state: state}
        )
    };

   render() {
       const {gender} = this.state
      return (
        <ScrollView style={styles.screenCoontainer}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>Choose Your Preffered Gender</Text>
                <RadioGroup RadioGroupStyle={{flexDirection:"row", alignSelf: 'center'}} getChecked={this.checkGender}>
                        <Radio iconName={"lens"} label={"Male"} value={"Male"} />
                        <Radio iconName={"lens"} label={"Female"} value={"Femal"} />
                        <Radio iconName={"lens"} label={"Other"} value={"Other"} />
                </RadioGroup>
            </Card>
            <Card>
                <Text style={styles.text}>What is your approximate weight?</Text>
                <Picker onValueChange={(itemValue) =>
                            this.setState({weight: itemValue})} 
                        selectedValue = {this.state.weight} 
                        onValueChange = {this.enterWeight}>
                        {this.makeWeightRange(50, 1000).map(num => {
                        return (<Picker.Item label = {`${num} lbs`} value = {num} />)})}
                </Picker>
            </Card>
            <Card>
                <Text style={styles.text}>What is your approximate age at the time of experiencs?</Text>
                <Picker onValueChange={(itemValue) =>
                            this.setState({age_at_time_of_experience: itemValue})} 
                        selectedValue = {this.state.age_at_time_of_experience} 
                        onValueChange = {this.enterAge}>
                        {this.makeWeightRange(5, 100).map(num => {
                        return (<Picker.Item label = {`${num} yrs`} value = {num} />)})}
                </Picker>
            </Card>
            <Card>
                <Text style={styles.text}>What was the approximate dose?</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => this.enterDose(text)}
                    value={this.state.dose}
                    />
            </Card>
            <Card>
                <TouchableOpacity 
                            style={styles.submitButton}
                            onPress={() => this.onSubmit(this.state)}>
                <Text style={styles.loginText}>Submit</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
    text: {
        fontSize:24, 
        fontWeight: '400',
        textAlign: 'center'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    submitButton:{
        backgroundColor:'#1E6738',
        alignSelf: 'center',
        width:'100%',
        borderRadius: 10,
        height: 60
    },
    loginText: {
        alignSelf: 'center',
        justifyContent:'center',
        fontSize: 50,
        color: 'white'
    },
    screenContainer:{
        display: 'flex',
        flexDirection: 'column'
    }
 })
export default AuthorInfo
