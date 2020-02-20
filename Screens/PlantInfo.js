import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
import { Card, Image, Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
import DrugInfoHeader from '../Components/DrugInfoHeader'
import DrugInfoSlider from '../Components/DrugInfoSlider'
import DrugStories from '../Components/DrugStories'
import DrugDiscussions from '../Components/DrugDiscussions'


class PlantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          drug_stories: [],
          drug_discussions: [],
          loading: true,
          drug: this.props.navigation.state.params.drug,
          aliases: this.props.navigation.state.params.alias,
          selectedIndex: 0,
        };
      }
    
      async componentDidMount() {
        try {
          const drug_stories = await axios.get('http://127.0.0.1:8000/drugs/drug_stories/')
          this.setState({ loading: true, drug_stories: drug_stories.data })
        } catch (error) {
          this.setState({error, loading: false})
          console.error(error);
        }
      }
    render(){ 
    const {drug_stories, loading, aliases, drug, selectedIndex} = this.state
    const { short_term_effects, long_term_effects, withdrawl, dependency } = drug
    const drugInfo = [short_term_effects, long_term_effects, withdrawl, dependency]
    return (
        <View style={{display: 'flex', flexDirection: 'column', color: 'blue', paddingTop: 10, height: '35%', flex: 1, paddingBottom: 0}}>
         <DrugInfoHeader drug={drug} aliases={aliases}/>
            <View> 
                <ScrollView horizontal={true} style={{height: 150, display: 'flex', backgroundColor: 'grey'}}>
                    <DrugInfoSlider drug={drug}/>
               </ScrollView>
            </View>
                <View>
                    <View  style={{alignSelf: 'center', display: 'flex', flexDirection: 'row', paddingBottom: 10}}>
                        <View style={{alignSelf:'flex-start', flex: 1, paddingLeft: 20}}>
                            <Text style={{paddingLeft: 10, fontSize:24, fontWeight: '300', paddingTop: 5, fontStyle: 'italic', paddingBottom: 5}} onPress={()=> this.setState({selectedIndex: 0})}>
                                Stories
                            </Text>
                            <Divider style={{width: 150}}/>
                        </View>
                        <View style={{alignSelf: 'flex-end', flex:1, paddingRight: 20}}>
                            <Text style={{paddingLeft: 20, fontSize:24, fontWeight: '300', paddingTop: 5, fontStyle: 'italic', paddingBottom: 5}} onPress={()=> this.setState({selectedIndex: 1})}>
                                Discussion
                            </Text>
                            <Divider style={{width: 150}}/>
                        </View>
                    </View>
                <View style={{display: 'flex', flexDirection:'column', alignSelf:'center'}}>
                    <ScrollView style={{flex: 1}}>
                        {this.state.selectedIndex ? 
                        <DrugDiscussions/> :
                        <DrugStories stories={drug_stories} drug={drug}/>
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: '#0CA4A5'
    },
    drugDescription: {
        fontFamily: "Avenir-Book", 
        textAlign: 'center',
        height: '80%'
    }
})

  export default PlantInfo