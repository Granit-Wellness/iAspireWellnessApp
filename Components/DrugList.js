import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  Header,
  ListItem
} from 'react-native';
import { Card, Avatar } from 'react-native-elements'


function getSections(drugList){
    let newSections = []
    drugList.forEach(drug => {
        if (!newSections.includes(drug.drug.name[0])){
            newSections.push(drug.drug.name[0])
        }
    })
    return newSections
}

function createNewData(drugList){
    let dataArray = []
    let sections = getSections(drugList)
    let newData = sections.map(section => {
        let newObj = {
            title: section,
            data: []
        }
        dataArray.push(newObj)
    })
    drugList.map(drug => {
        for(let i = 0; i < dataArray.length; i++){
            if (dataArray[i]['title'] === drug.drug.name[0]){
                dataArray[i].data.push({drug: drug})
            }
        }
    })
    return dataArray
}

export default DrugList = (props) => {

    const { filteredDrugs } = props
    const sectionedDrugs = createNewData(filteredDrugs)
    
    return (
      <View style={styles.container}>
         <SectionList
            style={{marginTop: 0}}
            renderItem={({item}) => {
                return(
                <View style={styles.itemContainer}>
                    <Avatar
                        rounded
                        source={{
                            uri:item.drug.drug.image,
                        }}
                        onPress={() => {
                          props.navigation.navigate('PlantInfo', {drug: item.drug.drug, alias: item.drug.alias})
                        }}
                    />
                    <View style={styles.itemDetail}>
                      <Text style={styles.item}>
                        {item.drug.drug.name}
                      </Text>
                      <Text style={styles.subitem}>
                        {item.drug.alias.join(', ')}
                      </Text>
                    </View>
                </View>
                )}
                }
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            sections={sectionedDrugs}
            />
    </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      flexDirection: 'row',
      alignContent: 'flex-start',
      marginTop: 0
    },

    sectionHeader: {
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 22,
      fontWeight: 'bold',
      color: '#F4DBD8',
      backgroundColor: '#58355E',
    },

    itemDetail: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      height: 50
    },
  
    item: {
      paddingLeft: 10,
      fontSize: 18,
    },

    subitem: {
      paddingLeft: 10,
      fontSize: 12,
    },

    avatar: {},

    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    }
  });