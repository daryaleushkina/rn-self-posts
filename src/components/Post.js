import React from 'react'
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity, TouchableHighlight} from 'react-native'
import Swipeable from 'react-native-swipeable';

export const Post = ({post, booked, onOpen}) => {

    const leftContent = <Text>Pull to activate</Text>;

    const rightButtons = [
        <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>
    ];

    return (
        <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onOpen(post)}
            >


                <View style={styles.post}>
                    <ImageBackground style={styles.image} source={{uri: post.img}}>
                        <View style={styles.textWrap}>
                            <Text style={styles.title}>
                                {new Date(post.date).toLocaleDateString()}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </Swipeable>


    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#fff',
        fontFamily: 'open-regular'
    }
})
