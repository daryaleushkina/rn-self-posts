import React from "react";
import {View,FlatList,StyleSheet} from "react-native";
import  {Post} from "./Post";
import {DATA} from "../data";


export const PostList = ({data,onOpen}) => {
    return <View style={styles.wrapper}>
        <FlatList
            data={data}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => <Post post={item}  onOpen={onOpen}/>}
        />
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
