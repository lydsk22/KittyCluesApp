import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function CatPick() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>How would you like to choose your cat?</Text>
      <Link href="/createcat" style={styles.button}>Create your own cat</Link>
      <Link href="/shelterindex" style={styles.button}>Browse the Kitty Clues Shelter</Link>
      
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
