import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
} from 'react-native';
import { Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { createNewData } = require('../objectFormattingUtils') 


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
                    />
                    <TouchableOpacity 
                      style={styles.itemDetail}
                      onPress={() => {
                        props.navigation.navigate('PlantInfo', {drug: item.drug.drug, alias: item.drug.alias})
                      }}>
                      <Text style={styles.item}>
                        {item.drug.drug.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={styles.subitem}>
                        {item.drug.alias.join(', ')}
                      </Text>
                    </TouchableOpacity>
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
      flexDirection: 'row',
      alignContent: 'flex-start',
      marginTop: 0,
      width: '100%',
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
      height: 50,
      overflow: 'hidden',
      width: 370,
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
      width: '100%'
    }
  });