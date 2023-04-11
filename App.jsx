import react from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, StyleSheet, TouchableOpacity} from "react-native";
import HomeS from "./screens/HomeScreen.jsx"
import PostS from "./screens/PostsScreen.jsx"

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Twittar" component={HomeS} 
        options={({navigation}) => ({
          headerStyle:{backgroundColor: '#1A1E2E'},
          headerTitleStyle:{ color: '#fff'},
          headerRight: () =>(
            <TouchableOpacity onPress={() => navigation.navigate('Publicando')}>
              <Text style={{color: '#fff', fontSize: 18}}>Publicar</Text>
            </TouchableOpacity>
          )
          })} />
        <Stack.Screen name="Publicando" component={PostS} 
        options={({navigation}) => ({
          headerStyle:{backgroundColor: '#0D141F'},
          headerTitleStyle:{ color: '#fff'}})} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App