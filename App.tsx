import React from "react";
import {Text, View, StyleSheet} from "react-native";
import colors from "./src/theme/color"
import font from "./src/theme/fonts"
import AntDesign from "react-native-vector-icons/AntDesign"

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text} >HHH</Text>
          <AntDesign name="like1" size={30} color={colors.orange}/>
      </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        color: colors.orange,
        fontSize: font.fontSize.xxlg
    }
})