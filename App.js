/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import { StatusBar, StyleSheet, View, Text, Image } from "react-native";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail";
// import koala from "./src/assets/Koala.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      selectedPlace: null
    };
  }

  onPressHandleMain = names => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: names,
          image: {
            uri: "https://source.unsplash.com/user/erondu/1600x900"
          }
        })
      };
    });
  };

  onSelectedItem = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key == key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({ selectedPlace: null });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalCloseHandler}
          />
          <Text>Adding List Item</Text>
          <PlaceInput onPressHandleMain={this.onPressHandleMain} />
          <PlaceList
            places={this.state.places}
            onSelectedItem={this.onSelectedItem}
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
