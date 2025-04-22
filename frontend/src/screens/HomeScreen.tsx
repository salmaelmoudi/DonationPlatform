// frontend/src/screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue, {user?.email}</Text>
      {/* TODO: Replace with list of donations, map, etc. */}
      <Button title="Se déconnecter" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcome: { fontSize: 20, marginBottom: 20 },
});
