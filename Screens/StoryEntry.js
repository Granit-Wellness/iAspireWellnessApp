import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import {Divider, Card} from 'react-native-elements'


class StoryEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {...this.props.navigation.state.params.state, entry: 'Your Story Here', title: 'Your Title Here'}
        this.updateEntry = this.updateEntry.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
    }
    updateEntry = (text) => {
        this.setState({ entry: text })
     }

    updateTitle = (text) => {
        this.setState({ type: text })
     }

     render(){
        return (
            <ScrollView>
                 <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => updateTitle(text)}
                    value={this.state.title}
                    />
                 <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => updateEntry(text)}
                    value={this.state.entry}
                    />
            </ScrollView>
         )
     }
}

export default StoryEntry