import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
  import { Card, Button } from 'react-native-elements'

function PlantInfo(props) {
    const drug = props.navigation.state.params.drug
    return (
    <View style={styles.container}>
        <Card
            title={drug.name}
            image={{uri: drug.image}}
            featuredSubtitle={props.navigation.state.params.alias.join(', ')}>
            <Text style={styles.drugDescription}>
                {drug.description}
            </Text>
            <Button
                buttonStyle={styles.buttonStyle}
                title='ADD STORY' 
                onPress={() => props.navigation.navigate('AddStory')}/>
        </Card>
    </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
    },
    buttonStyle: {
        backgroundColor: '#0CA4A5'
    },
    drugDescription: {
        marginBottom: 10, 
        alignSelf: 'flex-start',
        fontFamily: "Avenir-Book", 
        textAlign: 'center',
    }
})

  export default PlantInfo