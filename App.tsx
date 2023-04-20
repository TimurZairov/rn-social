import React from "react";
import {StyleSheet, View} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CommentsScreen from "./src/screens/CommentsScreen";


const App = () => {
    return (
        <View style={styles.app}>
            <CommentsScreen />
        </View>
    )
};

export default App;

const styles = StyleSheet.create({
    app: { flex: 1 }
});