import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function ShelterIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your cat! **Include "involve your child" popup**</Text>
      <Link href="/shelterlucky" style={styles.button}>Lucky</Link>
      <Link href="/sheltersocks" style={styles.button}>Socks</Link>
      <Link href="/shelterwhiskers" style={styles.button}>Whiskers</Link>

      
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
