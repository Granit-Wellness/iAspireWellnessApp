import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
  import { Card, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

function PlantInfo(props) {
    const drug = props.navigation.state.params.drug
    const aliases = props.navigation.state.params.alias;

    //this function can take in a sting as a title or a drug object.

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
                    ...aliases.length > 0 && 
                    { 
                    featuredSubtitle: aliases.join(', '),
                    featuredSubtitleStyle: {textAlign: 'center'},
                    containerStyle: { width: '90%' }
                }
            }
        }
    }

    return (
    <ScrollView>
        <View style={styles.container}>
            <Card {...createCardProps(drug)}>
                <Text style={styles.drugDescription}>
                    {drug.description || ''}
                </Text>
            </Card>
            <Card {...createCardProps("Short Term Effects")}>
                <Text style={styles.drugDescription}>
                    {drug.short_term_effects.join(", ") || 'No known short term efffects.'}
                </Text>
            </Card>
            <Card {...createCardProps("Long Term Effects")} >
                <Text style={styles.drugDescription}>
                    {drug.long_term_effects.join(", ") || 'No known long term efffects.'}
                </Text>
            </Card>
            <Card title="Withdrawl" {...createCardProps("Withdrawl")}>
                <Text style={styles.drugDescription}>
                    {drug.withdrawl.join(", ") || 'No known short withdrawl symptoms.'}
                </Text>
            </Card>
            <Card title="Dependency" {...createCardProps("Dependency")}>
                <Text style={styles.drugDescription}>
                    {drug.withdrawl.join(", ") || 'No known short dependency behaviors.'}
                </Text>
            </Card>
            <Button
                    buttonStyle={styles.buttonStyle}
                    title='ADD STORY' 
                    onPress={() => props.navigation.navigate('AddStory')}/>
        </View>
    </ScrollView>
    );
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
        marginBottom: 10, 
        alignSelf: 'flex-start',
        fontFamily: "Avenir-Book", 
        textAlign: 'center',
    }
})

  export default PlantInfo