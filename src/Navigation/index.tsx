import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View} from "react-native";
import EditProfileScreen from "../screens/EditProfileScreen";

const Navigation = () => {
    return (
        <NavigationContainer>
            <View style={styles.app}>
                <EditProfileScreen />
            </View>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    app: { flex: 1 }
});

