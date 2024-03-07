import { createUser, greeting } from '@repo/lib';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { supabase } from './supabase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
			<Button onPress={addUser} title='Add User'/>
      <StatusBar style="auto" />
    </View>
  );

	async function addUser() {
		await createUser(supabase, {name: 'Alice', email: 'alic'})
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
