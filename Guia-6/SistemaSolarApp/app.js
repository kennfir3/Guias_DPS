// App.js
import { useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import PlanetCard from './src/components/PlanetCard';
import PlanetModal from './src/components/PlanetModal';
import { planetsData } from './src/data/planetsData';

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlanetPress = (planet) => {
    setSelectedPlanet(planet);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setSelectedPlanet(null);
    }, 300);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f23" />
      
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200' }}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.3 }}
      >
        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>🌟 Sistema Solar</Text>
            <Text style={styles.subtitle}>
              Explora los maravillosos planetas de nuestro sistema solar
            </Text>
          </View>

          {/* Sol como elemento especial */}
          <View style={styles.sunContainer}>
            <View style={styles.sunGlow}>
              <View style={styles.sun}>
                <Text style={styles.sunText}>☀️</Text>
              </View>
            </View>
            <Text style={styles.sunLabel}>Sol</Text>
            <Text style={styles.sunDescription}>
              Nuestra estrella, el centro del sistema solar
            </Text>
          </View>

          {/* Lista de planetas */}
          <View style={styles.planetsContainer}>
            <Text style={styles.sectionTitle}>Los 8 Planetas</Text>
            {planetsData.map((planet) => (
              <PlanetCard
                key={planet.id}
                planet={planet}
                onPress={handlePlanetPress}
              />
            ))}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Toca cualquier planeta para conocer más detalles
            </Text>
          </View>
        </ScrollView>

        {/* Modal de información del planeta */}
        <PlanetModal
          visible={modalVisible}
          planet={selectedPlanet}
          onClose={handleCloseModal}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  backgroundImage: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  sunContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  sunGlow: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 20,
  },
  sun: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF8C00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },
  sunText: {
    fontSize: 50,
  },
  sunLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 15,
    marginBottom: 5,
  },
  sunDescription: {
    fontSize: 14,
    color: '#d0d0d0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  planetsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#a0a0a0',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;