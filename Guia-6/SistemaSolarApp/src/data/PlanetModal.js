import {
    Dimensions,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width, height } = Dimensions.get('window');

const PlanetModal = ({ visible, planet, onClose }) => {
  if (!planet) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Header con imagen del planeta */}
            <View style={[styles.header, { backgroundColor: planet.color + '20' }]}>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={onClose}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
              
              <Image 
                source={planet.image} 
                style={styles.modalPlanetImage}
                resizeMode="cover"
              />
              
              <Text style={[styles.modalTitle, { color: planet.color }]}>
                {planet.name}
              </Text>
            </View>

            {/* Información detallada */}
            <View style={styles.content}>
              <Text style={styles.description}>{planet.description}</Text>
              
              <View style={styles.dataContainer}>
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Tamaño:</Text>
                  <Text style={styles.dataValue}>{planet.size}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Masa:</Text>
                  <Text style={styles.dataValue}>{planet.mass}</Text>
                </View>
                
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Distancia al Sol:</Text>
                  <Text style={styles.dataValue}>{planet.distanceFromSun}</Text>
                </View>
              </View>

              <View style={styles.featuresContainer}>
                <Text style={styles.featuresTitle}>Características Únicas:</Text>
                <Text style={styles.featuresText}>{planet.uniqueFeatures}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: height * 0.8,
    overflow: 'hidden',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalPlanetImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'justify',
  },
  dataContainer: {
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a5a',
  },
  dataLabel: {
    fontSize: 16,
    color: '#a0a0a0',
    fontWeight: '600',
  },
  dataValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  featuresContainer: {
    backgroundColor: '#16213e',
    borderRadius: 10,
    padding: 15,
  },
  featuresTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuresText: {
    fontSize: 15,
    color: '#e0e0e0',
    lineHeight: 22,
  },
});

export default PlanetModal;