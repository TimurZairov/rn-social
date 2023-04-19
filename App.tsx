import React from "react";
import {StyleSheet, View} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
    return (
        <View style={styles.app}>
            <HomeScreen  />
        </View>
    )
};

export default App;

const styles = StyleSheet.create({
    app: { flex: 1 }
});