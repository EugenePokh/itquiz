import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CropsScreen = () => {
  const navigation = useNavigation();

  const crops = [
    { title: 'Приветсвуем на ИТ конференции - КОД РОСТА 2025', source: require('../assets/logo_app.png'), navigateTo: 'itquiz_test' },
  ];

  const renderCard = (crop, index) => (
    <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(crop.navigateTo)}>
      <View style={styles.imageContainer}>
        <Image source={crop.source} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.text}>{crop.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {crops.map((crop, index) => renderCard(crop, index))}
        </View>
        <Text style={styles.smallText}>РостАгро, 2025</Text>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 5,
  },
  smallText: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CropsScreen;