import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How would you like to receive reports?</Text>
      <Link href="/ages" style={styles.button}>Text</Link>
      <Link href="/ages" style={styles.button}>Email</Link>
      <Link href="/ages" style={styles.button}>Push Notification</Link>
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
  text: {
    fontSize: 50,
    color: '#fff',
  },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

});
