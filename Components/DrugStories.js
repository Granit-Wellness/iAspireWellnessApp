import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Card, Image, Divider } from 'react-native-elements'


function DrugStories(props){
const {stories, drug } = props
stories.filter((story) => story.drug === drug.name )
return(
<View>
    {stories.map(story => {
    return (
        <View key={story.id}>
            <Card title={story.title}>
                <Text 
                    numberOfLines={5}
                    ellipsizeMode='tail'>
                    {story.entry ||'No Entry'}
                </Text>
            </Card>
        </View> 
            )
    })
    }
</View>)
}

export default DrugStories