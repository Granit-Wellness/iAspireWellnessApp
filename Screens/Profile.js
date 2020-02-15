import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Profile extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View>
        <Button title='GO JOURNAL' onPress={() => this.props.navigation.navigate('JournalScreen')}/>
        <Text>This is the Profile screen</Text>
      </View>
    )
  }
};

export default Profile;