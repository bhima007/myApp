/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from "react-native";
import ListItem from "./src/components/ListItem";
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
        placeName: prevState.placeName.concat(names)
      };
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <Text>List Item</Text>
              <PlaceList placeName={this.state.placeName} />
              <PlaceInput onPressHandleMain={this.onPressHandleMain} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default App;
