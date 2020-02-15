import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-elements'

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]

export default class AddStory extends React.Component {
    render(){
        return (
        <View style={styles.container}>
          <Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
            containerStyle={{width: '100%'}}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>
        </View>
        )
    }
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