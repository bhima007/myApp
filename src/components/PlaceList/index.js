import React from "react";
import { FlatList } from "react-native";
import ListItem from "../ListItem";

const PlaceList = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <ListItem
          item={info.item.name}
          image={info.item.image}
          onItemPress={() => props.onSelectedItem(info.item.key)}
        />
      )}
    />
  );
};

export default PlaceList;
