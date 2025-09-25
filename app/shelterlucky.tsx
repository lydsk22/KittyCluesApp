import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function ShelterLucky() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lucky</Text>
      <Text style={styles.subheader}>Lucky is...</Text>
      <Text style={styles.text}>    5 months old</Text>
      <Text style={styles.text}>    Female</Text>
      <Text style={styles.text}>    Friendly</Text>
      <Text style={styles.text}>    Social</Text>
      <Text style={styles.text}>    Energetic</Text>

      <Link href="/shelterindex" style={styles.button}>Back to Shelter</Link>
      <Link href="/shelterindex" style={styles.button}>Adopt Lucky!</Link>

      
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
