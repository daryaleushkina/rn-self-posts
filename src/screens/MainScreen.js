import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableHighlight} from 'react-native'
import {DATA} from '../data'
import {Post} from '../components/Post'
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import Swipeable from 'react-native-swipeable';

export const MainScreen = ({navigation}) => {



    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }

    return (

        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item}  onOpen={openPostHandler}/>}
            />
        </View>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Мой блог',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='ios-camera'/>
        </HeaderButtons>
    ),
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='ios-menu'/>
        </HeaderButtons>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
