import React from "react";
import {TextInput} from "react-native";

// @ts-ignore
export const TextInputComponent = ({value, onChangeText, name, ...props}) => (
  <TextInput
    value={value}
    onChangeText={(value) => onChangeText(name, value)} //... Bind the name here
    {...props}
  />
)
