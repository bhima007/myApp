import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const PlaceInput = props => {
  const [placeName, setPlaceName] = useState("");

  const onChangeHandle = e => {
    setPlaceName(e);
  };

  const onPressHandle = () => {
    if (placeName.trim() === "") {
      return;
    }
    props.onPressHandleMain(placeName);
    setPlaceName("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={30}
        value={placeName}
        placeholder="What's next?"
        onChangeText={onChangeHandle}
        style={styles.placeInput}
      />
      <Button
        onPress={onPressHandle}
        title="Add"
        color="#fb9600"
        accessibilityLabel="Adding new string to state"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10
  },
  placeInput: {
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: "#111111",
    borderBottomWidth: 1
  }
});

export default PlaceInput;
