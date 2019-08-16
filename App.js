/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: []
    };
  }

  onPressHandleMain = names => {
    this.setState(prevState => {
      return {
        placeName: prevState.placeName.concat({
          key: Math.random(),
          value: names
        })
      };
    });
  };

  onDeletedItem = key => {
    this.setState(prevState => {
      return {
        placeName: prevState.placeName.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text>Adding List Item</Text>
          <PlaceInput onPressHandleMain={this.onPressHandleMain} />
          <PlaceList
            placeName={this.state.placeName}
            onDeletedItem={this.onDeletedItem}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default App;
