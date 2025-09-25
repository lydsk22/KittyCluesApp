import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Ages() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>How old is your child?</Text>
      <Link href="/catpick" style={styles.button}>5</Link>
      <Link href="/catpick" style={styles.button}>6</Link>
      <Link href="/catpick" style={styles.button}>7</Link>
      <Link href="/catpick" style={styles.button}>8</Link>
      
      <Text style={styles.subheader}>Why do we ask?</Text>
      <Text style={styles.text}>Learning techniques, reading levels, and pet responsibilities vary greatly by age. Selecting your child's age allows us to give you the best learning experience!</Text>
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
