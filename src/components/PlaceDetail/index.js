import React from "react";
import { Modal, Image, Text, View, Button, StyleSheet } from "react-native";

const PlaceDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          resizeMode="contain"
          source={props.selectedPlace.image}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="#d61d4e" onPress={props.onItemDeleted} />
          <Button title="Close" color="#293462" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 10
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  placeImage: {
    width: "100%",
    height: 200
  }
});

export default PlaceDetail;
