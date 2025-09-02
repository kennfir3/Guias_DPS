// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const images = [
  {
    id: 1,
    source: 'https://img.freepik.com/vector-gratis/seminario-web-concepto-ecologia-diseno-plano_23-2149849805.jpg',
    description: 'Reduce, Reutiliza, Recicla',
    info: 'Descubre cómo puedes contribuir al cuidado del medio ambiente con simples acciones en tu hogar.',
  },
  {
    id: 2,
    source: 'https://img.freepik.com/vector-gratis/ninos-plantando-arboles-energia-renovable-panel-solar-turbina-eolica_1150-43076.jpg',
    description: 'Reciclaje en tu Comunidad',
    info: 'Conoce programas de reciclaje en tu área y participa activamente para mejorar tu entorno.',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bannerTitle}>Bienvenido a Reciclaje Eco</Text>
        <Text style={styles.bannerText}>
          Ayudamos a cuidar el medio ambiente a través del reciclaje. ¡Únete a nosotros!
        </Text>
        <Button title="Ir a Detalles" onPress={() => navigation.navigate('Details')} />
      </View>

      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>Destacado</Text>
        {images.map(image => (
          <TouchableOpacity key={image.id} style={styles.featuredItem}>
            <Image source={{ uri: image.source }} style={styles.featuredImage} />
            <Text style={styles.featuredItemTitle}>{image.description}</Text>
            <Text style={styles.featuredItemText}>{image.info}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { padding: 20, backgroundColor: '#CEFF25', borderRadius: 12, marginBottom: 16 },
  bannerTitle: { fontSize: 24, fontWeight: 'bold' },
  bannerText: { fontSize: 16, marginTop: 4, marginBottom: 12 },
  featured: { paddingVertical: 8 },
  featuredTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  featuredItem: { marginBottom: 20 },
  featuredImage: { width: '100%', height: 200, borderRadius: 12, marginBottom: 8 },
  featuredItemTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  featuredItemText: { fontSize: 16 },
});
