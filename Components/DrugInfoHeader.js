import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
  } from 'react-native';

function DrugInfoHeader(props){
    const {drug, aliases} = props
    return(
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.drugTitle}>
                {drug.name}:
            </Text>
            <Text style={styles.aliasTitle}>
                Commmon Brand Names:
            </Text>
            <Text style={styles.aliases}>
                {aliases.join(', ')}
            </Text>
        </View> 
        <View style={styles.imageContainer}>
            <Image source={{uri: drug.image}} style={styles.image}/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: 'flex', 
        flexDirection: 'row', 
        alignContent: 'center', 
        paddingTop: 20, 
        paddingBottom: 20, 
        paddingRight: 10, 
        paddingLeft: 10
    },
    textContainer: {
        alignSelf: 'flex-start', 
        display: 'flex', 
        flexDirection: 'column', 
        width: '45%', 
        alignSelf: 'center'
    },
    drugTitle: {
        fontSize:24, 
        fontWeight: '700'
    },
    aliasTitle: {
        fontSize:12, 
        fontWeight: '700', 
        paddingTop: 5
    },
    aliases: {
        fontSize:12, 
        fontWeight: '300', 
        paddingTop: 5
    },
    imageContainer: {
        alignSelf: 'flex-end', 
        display:'flex', 
        paddingRight: 20
    },
    image: {
        height: 150, 
        width: 200, 
        alignSelf: 'center'
    }
})
export default DrugInfoHeader