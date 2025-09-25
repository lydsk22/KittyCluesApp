import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function ShelterSocks() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Socks</Text>
      <Text style={styles.subheader}>Socks is...</Text>
      <Text style={styles.text}>    4 years old</Text>
      <Text style={styles.text}>    Male</Text>
      <Text style={styles.text}>    Friendly</Text>
      <Text style={styles.text}>    Independent</Text>
      <Text style={styles.text}>    Patient</Text>

      <Link href="/shelterindex" style={styles.button}>Back to Shelter</Link>
      <Link href="/shelterindex" style={styles.button}>Adopt Socks!</Link>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    color: '#fff',
  },
  subheader: {
    fontSize: 30,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    fontSize: 50,
    textDecorationLine: 'underline',
    color: '#fff',
  },

});
