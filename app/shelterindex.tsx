import { Link } from "expo-router";
import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ShelterIndex() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent
        visible={showPopup}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Welcome!</Text>
            <Text style={styles.modalText}>
              It's important that your child is included when meeting potential cats. Invite your child to participate in meeting and choosing your Kitty Clues cat!
            </Text>
            <TouchableOpacity onPress={handleClose} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Ready!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.header}>Choose your cat!</Text>
      <Link href="/shelterlucky" style={styles.button}>Lucky</Link>
      <Link href="/sheltersocks" style={styles.button}>Socks</Link>
      <Link href="/shelterwhiskers" style={styles.button}>Whiskers</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    fontSize: 50,
    textDecorationLine: "underline",
    color: "#fff",
    marginTop: 15,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)", // dim background
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: "90%",
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 25,
  },
  modalButton: {
    backgroundColor: "#25292e",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
