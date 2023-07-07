import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandOnePage = () => {
  const navigation = useNavigation();

  const data = [
    { id: 1, image: require('../assets/1.jpg')},
    { id: 2, image: require('../assets/2.jpg') },
    { id: 3, image: require('../assets/3.jpg') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
         <Text style={styles.imageNumber}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePress = () => {
    navigation.navigate('LandDetails');
  };

  return (
    <ImageBackground source={require('../assets/BG.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Anuradapura</Text>
      <Image source={require('../assets/Weeramawatha_.jpg')} style={styles.titleImage} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>INFORMATION</Text>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Size:</Text>
          <Text style={styles.infoValue}>500 sq. km</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Population:</Text>
          <Text style={styles.infoValue}>250,000</Text>
        </View>
        
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} 
        contentContainerStyle={styles.listContainer}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    marginTop: 32,
    marginBottom: 16,
  },
   titleImage: {
    width: '90%',
    height: 200,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    width: '90%',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
  },
  separator: {
    height: 2,
    backgroundColor: '#E5E7EB',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoLabel: {
    fontWeight: '700',
    marginRight: 8,
    flex: 1,
  },
  infoValue: {
    color: '#6B7280',
    flex: 2,
  },
  listContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 8,
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  imageNumber: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});

export default LandOnePage;