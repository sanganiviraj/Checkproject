import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const tailordata = useSelector((state) => state.Tailordata);

 
  console.log('Data for Tailor:', tailordata);

  return (
    <View style={styles.container}>
      <FlatList
        data={tailordata}
        keyExtractor={(item) => item.Tailorid.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('TailorForm', { tailor: item });
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Name: {item.name}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Number: {item.number}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TailorForm')}
        >
          <Text style={styles.buttonText}>Open Tailor Form</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('InvoiceScreen')}
        >
          <Text style={styles.buttonText}>Open Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36454F',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    backgroundColor: '#ffff',
    padding: 10,
    marginBottom:50,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
