import React from "react";
import {Button, Text, View} from "react-native";
import {styles} from "./styles";

// @ts-ignore
export const AboutMe = ({navigation}) => {
  return (
    <View style={styles.about}>
      <Text style={styles.aboutTxt}>Student ID: 101188963</Text>
      <Text style={styles.aboutTxt}>Suho Kang</Text>
      {/*<Button title="Home" onPress={() => navigation.push("Home")}/>*/}
      <Button title="Back To Home" onPress={() => navigation.goBack()}/>
      {/*<Button title="To first screen" onPress={() => navigation.popToTop()}/>*/}
    </View>
  )
}
