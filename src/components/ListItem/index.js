import React from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";

const ListItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPress}>
    <View style={styles.container}>
      <Text>{props.item}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#efefef"
  }
});

export default ListItem;
