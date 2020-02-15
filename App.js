import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// StackNavigator provides the way for your app to transition between the screens and manage navigation history.
import Drugs from './Screens/Plants';
import Profile from './Screens/Profile';
import Login from './Screens/Login';
import PlantInfo from './Screens/PlantInfo';
import AddStory from './Screens/AddStory';
import JournalScreen from './Screens/Journal';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ProfileStack = createStackNavigator({
  ProfileScreen: { screen: Profile},
  JournalScreen: {screen: JournalScreen}
});

const PlantStack = createStackNavigator({
  PlantScreen: { screen: Drugs },
  PlantInfo: { screen: PlantInfo },
  AddStory: { screen: AddStory },
});



const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    PlantsScreen: { screen: PlantStack,
      navigationOptions:{ 
        tabBarLabel:'Plant',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-leaf'}/>  
            </View>),  
      },
    },
      JournalScreen: { screen: ProfileStack,
        navigationOptions:{  
          tabBarLabel:'My Stuff',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
              </View>),  
        },
      },
  },
  {
    initialRouteName: 'PlantsScreen',
    tabBarlabel: 'PlantsScreen',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const BottomTabContainer = createAppContainer(BottomTabNavigator)
const AppContainer = createAppContainer(ProfileStack);

export default class App extends Component {
  render() {
    return (
      <BottomTabContainer screenProps={'yo yo yo'}  />
    );
  }
}

const styles = StyleSheet.create({
  bottomTabNavigator: {
    color: '#F4DBD8',
    backgroundColor: '#58355E'
  }
})