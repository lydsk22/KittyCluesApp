import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="ages" options={{ title: 'Age Selection' }} />
      <Stack.Screen name="catpick" options={{ title: 'Cat Pick Selection' }} />
      <Stack.Screen name="createcat" options={{ title: 'Create Your Cat' }} />
      <Stack.Screen name="shelterindex" options={{ title: 'Shelter Overview' }} />
      <Stack.Screen name="shelterlucky" options={{ title: 'Lucky Overview' }} />
      <Stack.Screen name="shelterwhiskers" options={{ title: 'Whiskers Overview' }} />
      <Stack.Screen name="sheltersocks" options={{ title: 'Socks Overview' }} />
    </Stack>
  );
}
