import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function ShelterWhiskers() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Whiskers</Text>
      <Text style={styles.subheader}>Whiskers is...</Text>
      <Text style={styles.text}>    10 years old</Text>
      <Text style={styles.text}>    Female</Text>
      <Text style={styles.text}>    Friendly</Text>
      <Text style={styles.text}>    Very low energy</Text>
      <Text style={styles.text}>    Patient</Text>

      <Link href="/shelterindex" style={styles.button}>Back to Shelter</Link>
      <Link href="/shelterindex" style={styles.button}>Adopt Whiskers!</Link>

      
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
