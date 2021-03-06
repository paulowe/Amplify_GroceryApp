
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { blueGreen } from "../utils/helpers";

const LoadingScreen = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Welcome back ! </Text>
            <MaterialCommunityIcons name="bee-flower" size={100} color="#fff" />
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: blueGreen,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold'
    },
  });