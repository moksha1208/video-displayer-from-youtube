import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: this.props.navigation.getParam('videos', []),
            url: `https://www.youtube.com/embed/${this.props.navigation.getParam('videos', [])[0].id}`
        }
    }
    static navigationOptions() {
        return {
            title: 'Videos'
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 200, width: '100%' }}>
                    <WebView
                        ref={obj => {
                            this.webview = obj
                        }}
                        source={{ uri: this.state.url }}
                        style={{ height: 200, width: '100%' }} />
                </View>
                <FlatList
                    data={this.state.videos}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        url: `https://www.youtube.com/embed/${item.id}`
                                    })
                                    this.webview.reload();
                                }}
                                style={{ backgroundColor: 'white', height: 50, justifyContent: 'center', margin: 5 }}>
                                <Text style={{ margin: 5 }} numberOfLines={1}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        )
    }
}