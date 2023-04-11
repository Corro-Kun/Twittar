import react, {useEffect, useState} from "react";
import { View,Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import { GetPost } from "../api";

const PostList = () => {
    const [Post, setPost] = useState([])

    const [RefreshP, setRefreshP] = useState(false)

    const LoadPost = async () =>{
        const data = await GetPost()
        setPost(data)
    }

    useEffect(() =>{
        LoadPost();
    },[])

    const refres = react.useCallback(async () => {
        setRefreshP(true)
        await LoadPost()
        setRefreshP(false)
    })

    return(
        <FlatList 
                data={Post} 
                renderItem={({item}) =>{
                    return(
                        <View style={styles.Conten} >
                            <Text style={styles.Name}>{item.name}</Text>
                            <Text style={styles.TextP}>{item.contener}</Text>
                        </View>
                    )
                }}
                refreshControl={
                    <RefreshControl
                    refreshing = {RefreshP}
                    colors={['#2994F2']}
                        onRefresh={refres}
                    />
                }
        />    
    )
}

const styles = StyleSheet.create({
    Conten: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingHorizontal: 5,
        backgroundColor: '#0D141F',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#2994F2'
    },
    Name:{
        fontSize: 40,
        color: '#fff'
    },
    TextP:{
        fontSize: 25,
        color: '#D8F4FF'
    }

})

export default PostList