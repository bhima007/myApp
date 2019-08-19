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
        <View style={styles.buttonModal}>
          <View style={{ width: "49%" }}>
            <Button
              title="Delete"
              color="#d61d4e"
              onPress={props.onItemDeleted}
            />
          </View>
          <View style={{ width: "49%" }}>
            <Button
              title="Close"
              color="#407088"
              onPress={props.onModalClosed}
            />
          </View>
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
  },
  buttonModal: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default PlaceDetail;
