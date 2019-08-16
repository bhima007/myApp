import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPress} activeOpacity={0.5} >
    <View style={styles.container}>
      <Text>{props.item}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "#efefef"
  }
});

export default ListItem;
