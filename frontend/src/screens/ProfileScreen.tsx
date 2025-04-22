// frontend/src/screens/ProfileScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Text>Email : {user?.email}</Text>
      {/* TODO: Add profile picture, verification status, edit profile button */}
      <Button title="Se déconnecter" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 15 },
});
