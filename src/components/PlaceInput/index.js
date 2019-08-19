import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

class PlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: ""
    };
  }

  onChangeHandle = e => {
    this.setState({ placeName: e });
  };

  onPressHandle = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPressHandleMain(this.state.placeName);
    this.setState({ placeName: "" });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={30}
          value={this.state.placeName}
          placeholder="What's next?"
          onChangeText={this.onChangeHandle}
          style={styles.placeInput}
        />
        <Button
          onPress={this.onPressHandle}
          title="Add"
          color="#fb9600"
          accessibilityLabel="Adding new string to state"
        />
      </View>
    );
  }
}

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
