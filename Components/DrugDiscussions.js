import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

class DrugDiscussion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                drug: 1,
                author: 2,
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
                created_date: '01/23/2020'    
            }, {
                drug: 1,
                author: 2,
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
                created_date: '01/23/2020'    
            }, {
                drug: 1,
                author: 2,
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
                created_date: '01/23/2020'    
            }
            ]
        };
      }
    
    //   async componentDidMount() {
    //     try {
    //       const drug_stories = await axios.get('http://127.0.0.1:8000/drugs/drug_stories/')
    //       this.setState({ loading: true, drug_stories: drug_stories.data })
    //     } catch (error) {
    //       this.setState({error, loading: false})
    //       console.error(error);
    //     }
    //   }
    render(){ 
    return (
    <View style={{display: 'flex', flexDirection:'column'}}>
        <View style={{ flex: 1, width: '100%', paddingLeft: 16, display:'flex', flexDirection:'row', alignContent: 'center'}}>
            <TextInput placeholder={'Ask the community...'} style={{
                        fontSize: 20,
                        alignSelf:'center',
                        border: 'grey',
                        borderWidth: 1,
                        paddingLeft: 0,
                        height: 70,
                        width: 300
                     }}></TextInput>
            <Ionicons name="md-add-circle" size={50} color="green"style={{alignSelf: 'center', paddingLeft: 20}}/>
        </View>
        {this.state.posts.map(post => {
        return (
            <View key={post.id}>
                <Card title={post.title}>
                <View style={{display: 'flex', flexDirection:'column'}}>
                    <Text 
                        numberOfLines={5}
                        ellipsizeMode='tail'
                        style={{marginBottom: 10}}>
                        {post.content ||'No Entry'}
                    </Text>
                    <Text>
                    </Text>
                    </View>
                </Card>
            </View>
        )})
    }
</View>
)}}
    
const styles = StyleSheet.create({
    loginScreenButton:{
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        display: 'flex',
        flexDirection: 'column'
    },
    loginText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'

    },
    postText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
})
export default DrugDiscussion