import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlbumsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📂 Tus álbumes de fotos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, fontWeight: 'bold' },
});
