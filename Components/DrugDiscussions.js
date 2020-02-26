import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { Card, Avatar, Divider } from 'react-native-elements'
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const FlatListData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Avatar
            rounded
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

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
    
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "85%",
          backgroundColor: "#607D8B",
          alignSelf: 'flex-end'
        }}
      />
    );
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
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        paddingLeft: 0,
                        height: 70,
                        width: 300
                     }}></TextInput>
            <Ionicons name="md-add-circle" size={50} color="green"style={{alignSelf: 'center', paddingLeft: 20}}/>
        </View>
        {this.state.posts.map(post => {
        return (
            <View key={post.id}>
                <Card containerStyle={{marginBottom: 0}} title={post.title}>
                <View style={{display: 'flex', flexDirection:'column'}}>
                    <Text 
                        numberOfLines={5}
                        ellipsizeMode='tail'
                        style={{marginBottom: 10}}>
                        {post.content ||'No Entry'}
                    </Text>
                    <Divider style={{marginBottom: 10}}/>
                    <TouchableOpacity style={styles.commentButton}>
                        <EvilIcons name={'comment'} style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'}/>
                        <Text style={styles.commentsCount}>Comment</Text>
                </TouchableOpacity>
                <Divider style={{marginBottom: 10}}/>
                    <View>
                </View>
                        <View style={styles.container}>
                        <FlatList
                            style={{display: 'flex'}}
                            data={FlatListData}
                            renderItem={({ item }) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent = {this.FlatListItemSeparator}
                        />
                        </View>
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
    },
    commentButton: {
        paddingLeft: 0,
        flex: 0.25,
        alignItems: "center",
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
      },
      commentButtonIcon: {
        margin: 0,
        alignSelf: 'flex-start',
        borderWidth: 0,
      },
      commentsCount: {
        color: "rgb(136, 153, 166)",
        marginRight: 20
      },
      container: {
        marginTop: 20,
        marginLeft: 15,
        backgroundColor: '#DCDCDC'
      },
      item: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 5,
      },
      title: {
          alignSelf: 'center',
          paddingLeft: 10,
      }
})
export default DrugDiscussion