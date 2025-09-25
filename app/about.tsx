import { Checkbox } from 'expo-checkbox';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  const [isCheckedText, setCheckedText] = useState(false);
  const [isCheckedEmail, setCheckedEmail] = useState(false);
  const [isCheckedNotif, setCheckedNotif] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How would you like to receive reports? (Check all that apply)</Text>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isCheckedText} onValueChange={setCheckedText} />
        <Text style={styles.text}>Text</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isCheckedEmail} onValueChange={setCheckedEmail} />
        <Text style={styles.text}>Email</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isCheckedNotif} onValueChange={setCheckedNotif} />
        <Text style={styles.text}>Push Notification</Text>
      </View>
      <Link href="/ages" style={styles.button}>Done</Link>
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
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 50, color: '#fff',
  },
  subheader: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  checkbox: {
    margin: 20,
  },

});
