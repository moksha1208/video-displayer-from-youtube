import React from 'react';
import { View, FlatList, Image, Text, Button } from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        this.setState({
            courses: require('../data.json')
        })
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8f65375073d90713d11b7238739674d1`).then((result)=>{
            result.json().then((data)=>{
                console.log(data);
            })
        })
    }
    render() {
        return (
            <FlatList
                data={this.state.courses}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ backgroundColor: 'white', margin: 10, borderRadius: 5, overflow: 'hidden' }}>
                            <Image source={{ uri: item.imgUrl }} style={{ height: 150 }} resizeMode='cover'>

                            </Image>
                            <Text style={{ fontSize: 25, margin: 5 }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 18, margin: 5 }}>
                                {item.description}
                            </Text>
                            <Button
                                onPress={()=>{
                                    this.props.navigation.navigate('videos', {
                                        videos: item.videos
                                    })
                                }}
                                title='Start'
                                color='pink'>

                            </Button>
                        </View>
                    )
                }}
            />
        )
    }
} 