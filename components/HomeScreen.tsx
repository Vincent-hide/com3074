import React, {useState} from "react";
import {Alert, Button, Keyboard, ScrollView, Switch, Text, TouchableWithoutFeedback, View} from "react-native";
import {TextInputComponent} from "./TextInputComponent";
import {styles} from "./styles";

// @ts-ignore
function HomeScreen({navigation}) {
  const initialData = {
    sizeOfFloor: "",
    floorPrice: "",
    installationPrice: ""
  }

  const initialPrice = {
    flooring: 0,
    installation: 0,
    total: 0,
    tax: 0
  }
  const [data, setData] = useState(initialData);
  const [prices, setPrices] = useState(initialPrice);
  const [unit, setUnit] = useState(true); // true: feet, false: meters


  // methods
  const handleChange = (name: any, value: any) => {
    setData({
      ...data,
      [name]: value
    })
  };

  const handleClear = () => {
    setData(initialData);
    setPrices(initialPrice)
  }

  const handleSubmit = () => {
    let check = true;
    let alertTitle;
    let alertOptions = [];

    Object.values(data).map(value => {
      // @ts-ignore
      if (value == "" || parseInt(value) <= 0 || isNaN(value)) {
        check = false;
      }
    })
    alertTitle = check ? "data submitted" : "invalid data submitted";
    if (check) {
      alertOptions.push(
        {
          text: "Print Summary", onPress: () => {
            handleClear();
            summary()
          }
        },
        {text: "Calculate again", onPress: () => handleClear()},
      )
    } else {
      alertOptions.push(
        {text: "Back to main", onPress: () => console.log("Invalid Inputs", data)},
      )
    }
    Alert.alert("Submitted", alertTitle, alertOptions);
    console.log(data)
  }

  const summary = () => {
    const {sizeOfFloor, floorPrice, installationPrice} = data;
    // @ts-ignore
    const flooring = sizeOfFloor * floorPrice;
    // @ts-ignore
    const installation = installationPrice * sizeOfFloor;
    const total = flooring + installation;
    const tax = (total * .13).toFixed(2);
    const summaryPrice = {
      flooring,
      installation,
      total,
      tax,
    }
    // @ts-ignore
    setPrices(summaryPrice);
    console.log("Summary printed")
  }

  // @ts-ignore
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{margin: 20}}>
        <Button title="About Me" onPress={() => navigation.navigate("AboutMe")}/>

        <View style={{margin: 20}}>
          <ScrollView>
            <Switch value={unit} onValueChange={() => setUnit(!unit)}/>
            <TextInputComponent
              style={styles.textInput}
              placeholder={`Size of room in ${unit ? 'feet' : 'meter'}`}
              value={data.sizeOfFloor}
              onChangeText={handleChange}
              name='sizeOfFloor'
            />
            <TextInputComponent
              style={styles.textInput}
              placeholder="Price per uni of flooring"
              value={data.floorPrice}
              onChangeText={handleChange}
              name='floorPrice'
            />
            <TextInputComponent
              style={styles.textInput}
              placeholder="Price per uni of flooring installation"
              value={data.installationPrice}
              onChangeText={handleChange}
              name='installationPrice'
            />
            <View style={{marginBottom: 10}}>
              <Button title="Submit" onPress={handleSubmit}/>
            </View>
            <View>
              <Button title="Clear" onPress={handleClear}/>
            </View>
          </ScrollView>
        </View>
        <View style={styles.summary}>
          <Text>
            flooring: ${prices.flooring} in {unit ? 'feet' : 'meter'}
          </Text>
          <Text>
            Installation: ${prices.installation}
          </Text>
          <Text>
            total: ${prices.total}
          </Text>
          <Text>
            tax: ${prices.tax}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default HomeScreen;
