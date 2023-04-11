import react, {useState} from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { SetPost } from "../api.js";

const Posts = ({ navigation }) => {

    const [publication, setpublication] = useState({
        name: '',
        contener: ''
    })
    const env = (Nam, mind) => setpublication({...publication,[Nam]: mind })

    const set = () =>{
        SetPost(publication)
        navigation.navigate('Twittar')
    }

    return(
        <View style={styles.Backgrund}>
            <Text style={styles.TextS}>Publicación</Text>
            <TextInput
                style={styles.inputT}
                placeholder="Nombre"
                placeholderTextColor="#ffff"
                onChangeText={(text) => env('name', text)}
            />
            <TextInput
                style={styles.inputT}
                placeholder="¿En que estas pensando?" 
                placeholderTextColor="#ffff"
                onChangeText={(text) => env('contener', text)}
            />
            <TouchableOpacity style={styles.buton}
                onPress={set}
            >
                <Text style={styles.TextB}>Publicar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Backgrund:{
        flex: 1,
        backgroundColor: '#0D141F',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    TextS:{
        color: '#fff',
        fontSize: 35,
    },
    inputT:{
        fontSize: 30,
        margin: 10,
        color: '#fff',
        width: '90%',
        height: 70,
        textAlign: 'center',
        backgroundColor: '#12171F',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#fff'
    },
    buton:{
        backgroundColor: '#2994F2',
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10
    },
    TextB:{
        color: '#12171F',
        fontSize: 20
    }
})

export default Posts