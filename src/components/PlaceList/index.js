import React from "react";
import { Text, View } from "react-native";
import ListItem from "../ListItem";

const PlaceList = props => {
  const placeOutput = props.placeName.map((name, index) => (
    <ListItem
      key={index}
      item={name}
      onItemPress={() => alert("Touched on item with ID - " + index)}
    />
  ));
  return <View>{placeOutput}</View>;
};

export default PlaceList;
