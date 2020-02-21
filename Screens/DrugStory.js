import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {Divider, Card} from 'react-native-elements'

function DrugStory(props) {
    const {story} = props.navigation.state.params
        return (
            <ScrollView style={{display: 'flex'}}>
                <View style={styles.storyHeader}>
                    <Card title='About the Author'>
                        <Text style={styles.informationalText}>
                            <Text style={{fontWeight:'bold'}}>Name: </Text>{story.author}
                        </Text>
                        <Text style={styles.informationalText}>
                            <Text style={{fontWeight:'bold'}}>Gender: </Text> {story.gender}
                        </Text>
                        <Text style={styles.informationalText}>
                            <Text style={{fontWeight:'bold'}}>Dose: </Text>{story.dose}
                        </Text>
                        <Text style={styles.informationalText}>
                            <Text style={{fontWeight:'bold'}}>Body Weight: </Text>{story.body_weight}
                        </Text>
                        <Text style={styles.informationalText}>
                            <Text style={{fontWeight:'bold'}}>Age at time of experience: </Text>{story.age_at_time_of_experience}
                        </Text>
                        <Text style={styles.informationalText}>
                            <Text style={{fontWeight:'bold'}}>Date Published: </Text>{story.date_published}
                        </Text>
                    </Card>
                    <Card title={story.title} style={{flex: 1}}containerStyle={{paddingRight: 20, paddingLeft: 20}}>
                    <Text style={{paddingTop: 10, fontSize: 20, fontWeight: '400'}}>
                        {story.entry}
                    </Text>
                </Card>
                </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create ({
    storyHeader: {
        display: 'flex', 
        flexDirection: 'column', 
        alignContent: 'center', 
        paddingTop: 20, 
        paddingBottom: 20, 
        paddingRight: 10, 
        paddingLeft: 10,
        flex:1
    },
    title: {
        fontSize:24, 
        fontWeight: '700',
        alignSelf: 'center'
    },
    informationalText: {
        fontSize: 20, 
        fontWeight: '400',
    },
    informationalTextBold: {
        fontSize: 20, 
        fontWeight: '700',
    }
})

export default DrugStory