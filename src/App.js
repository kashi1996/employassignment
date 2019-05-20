import React, { Component } from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {

    componentWillMount(){
         const firebaseConfig = {
            apiKey: "AIzaSyB4Dl_hp-XK6CfGxkSIMOJbPCEm6UNzdxs",
            authDomain: "myproject-321-ed70b.firebaseapp.com",
            databaseURL: "https://myproject-321-ed70b.firebaseio.com",
            projectId: "myproject-321-ed70b",
            storageBucket: "myproject-321-ed70b.appspot.com",
            messagingSenderId: "410499592850",
            appId: "1:410499592850:web:791a05f920a4d6ab"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
                <View>
                    {/* <Text>Redux Manager Project</Text> */}
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;