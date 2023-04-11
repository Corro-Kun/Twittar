import react from "react";
import { View,Text,StyleSheet} from "react-native";
import PostList from "../components/postlist";

const HomeScreen = () => {
    return(
        <View style={styles.Backgrund}>
            <PostList />
        </View>
    )
}

const styles = StyleSheet.create({
    Backgrund:{
        flex: 1,
        backgroundColor: '#1A1E2E',
        padding: 10 
    }
})

export default HomeScreen