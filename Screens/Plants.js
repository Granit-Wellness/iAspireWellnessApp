import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { SearchBar, ButtonGroup } from 'react-native-elements'
import axios from 'axios'
import DrugList from '../Components/DrugList'

class Drugs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectedIndex: 0,
      drug_type: ['plant', 'pharmecutical', 'chemical'],
      name_option: ['', 'alias'],
      drugs: [],
      alias: [],
      combinedDrugAlias: [],
      fromattedDrugs: [],
      error: null,
      search: ''
    };
    this.updateIndex = this.updateIndex.bind(this)
  }

getSections(drugList){
    let newSections = []
    drugList.forEach(drug => {
        if (!newSections.includes(drug.name[0])){
            newSections.push(drug.name[0])
        }
    })
    return newSections
}


async componentDidMount() {
    try {
      const drugs = await axios.get(`http://127.0.0.1:8000/drugs/all_drugs/`)
      const alias = await axios.get(`http://127.0.0.1:8000/drugs/all_alias/`)
      const combinedData = this.aliasDrugCombiner(drugs.data, alias.data)
      this.setState({ drugs: drugs.data, alias: alias.data, loading: true, combinedDrugAlias: combinedData })
    } catch (error) {
      this.setState({error, loading: false})
      console.error(error);
    }
  }

aliasDrugCombiner(drugList, aliasList){
  return drugList.map(drug => {
    const aliasArr = aliasList.filter(alias => alias.drug === drug.id)
    return { drug: drug, alias: aliasArr.map(alias => alias.name) }
  })
}

searchFilterFunction = text => {   
    this.setState({ search: text }) 
  }

updateIndex(selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const { search, selectedIndex } = this.state
    const buttons = ['Plants', 'Pharmecuticals', 'Chemicals']
    
    if (this.state.loading) {
      const filteredDrugs = this.state.combinedDrugAlias.filter(drug => {
        if (drug.alias.forEach((alias) => alias.toLowerCase().includes(this.state.search.toLowerCase()))) {
          return true;
        }
        if (drug.drug.name.toLowerCase().includes(this.state.search.toLowerCase())) {
          return true;
        }
        return false;    
      });

      const categorizedAndFiltered = filteredDrugs.filter(drug => drug.drug.drug_type.toLowerCase() === this.state.drug_type[selectedIndex])

      return (
        <View style={styles.container}>
          <SearchBar        
            placeholder="Type Here..."        
            lightTheme        
            round        
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={search} 
            style={{padding: 0}}            
            /> 
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 20}}
            selectedButtonStyle={{backgroundColor: '#58355E', padding: 0}}
          />
          <DrugList state={this.state} navigation={this.props.navigation} filteredDrugs={categorizedAndFiltered}/>
        </View>
      )
    } else {
      return (
        <Text>
          LOADING
        </Text>
      )
    }
  } 
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      padding: 0
    },
})

export default Drugs;