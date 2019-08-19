import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPress} activeOpacity={0.5}>
    <View style={styles.container}>
      <Image
        source={props.image}
        style={styles.imageContainer}
        resizeMode="contain"
      />
      <Text>{props.item}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    backgroundColor: "#efefef"
  },
  imageContainer: {
    height: 60,
    width: 100,
    marginRight: 8
  }
});

export default ListItem;
