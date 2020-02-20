import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
import { Card, Image, Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

const createCardProps = (drug) => {
    if (typeof(drug) === 'string'){
        return {
            title: drug,
            containerStyle: { width: '90%' }
        }
        } else {
            return {
                title: drug.name,
                image: { uri: drug.image },
                // conditionally add subtitle in props if alias exists
            }
        }
}

function DrugInfoSlider(props){
    const { drug } = props
    const { short_term_effects, long_term_effects, withdrawl, dependency} = drug
    const drugInfo = [{content: short_term_effects, name: 'Short Term Effects'}, { content:long_term_effects, name: 'Long Term Effects'}, {content: withdrawl, name: 'Withdrawl'}, {content:dependency, name: 'Dependeny'}]
    return(
    drugInfo.map((item) => {
        return (
            <View style={{height: 85, width: 300}} key={drug.id}>
                <Card title={item.name}>
                    <Text style={styles.drugDescription}>
                        {item.content.join(', ') ||'No known short term efffects.'}
                    </Text>
                </Card>
        </View>)
        })
    )}

const styles = StyleSheet.create({
    drugDescription: {
        fontFamily: "Avenir-Book", 
        textAlign: 'center',
        height: '80%'
    }
})
export default DrugInfoSlider