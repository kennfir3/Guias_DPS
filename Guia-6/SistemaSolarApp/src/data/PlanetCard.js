import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const PlanetCard = ({ planet, onPress }) => {
  return (
    <TouchableHighlight 
      onPress={() => onPress(planet)}
      underlayColor="#f0f0f0"
      style={styles.cardContainer}
    >
      <View style={[styles.card, { borderColor: planet.color }]}>
        <Image 
          source={planet.image} 
          style={styles.planetImage}
          resizeMode="cover"
        />
        <View style={styles.planetInfo}>
          <Text style={[styles.planetName, { color: planet.color }]}>
            {planet.name}
          </Text>
          <Text style={styles.planetDistance}>
            {planet.distanceFromSun}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    borderRadius: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1a1a2e',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  planetImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  planetInfo: {
    flex: 1,
  },
  planetName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planetDistance: {
    fontSize: 14,
    color: '#a0a0a0',
    fontStyle: 'italic',
  },
});

export default PlanetCard;