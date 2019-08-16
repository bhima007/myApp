import React from "react";
import { FlatList } from "react-native";
import ListItem from "../ListItem";

const PlaceList = props => {
  return (
    <FlatList
      data={props.placeName}
      renderItem={info => (
        <ListItem
          item={info.item.value}
          onItemPress={() => props.onDeletedItem(info.item.key)}
        />
      )}
    />
  );
};

export default PlaceList;
