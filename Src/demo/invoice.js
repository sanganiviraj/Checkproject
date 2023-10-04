import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Add_Customer } from './action';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  { label: 'Shirt', value: 'Shirt' },
  { label: 'Pants', value: 'Pants' },
  { label: 'Kurtas', value: 'Kurtas' },
  { label: 'Suits', value: 'Suits' },
];

const InvoiceScreen = () => {
  const tailordata = useSelector((state) => state.Tailordata);
  const customerData = useSelector((state) => state.Customerdata);
  console.log(customerData);
  const dispatch = useDispatch();
  const [Customername, setCustomername] = useState('');
  const [Customernumber, setCustomernumber] = useState('');
  
  const [shirtopen, setShirtOpen] = useState(false);
  const [Pantopen, setPantOpen] = useState(false);
  const [Kurtasopen, setKurtasOpen] = useState(false);
  const [Suitsopen, setSuitsOpen] = useState(false);

  const [ShirtShoulder, setShirtShoulder] = useState('');
  const [ShirtSleeves, setShirtSleeves] = useState('');
  const [ShirtChest, setShirtChest] = useState('');
  const [ShirtLength, setShirtLength] = useState(''); 

  const [PantsWaist, setPantsWaist] = useState('');
  const [PantsLength, setPantsLength] = useState('');
  const [PantsHip, setPantsHip] = useState('');
  const [PantsInseam, setPantsInseam] = useState('');

  const [KurtasShoulder, setKurtasShoulder] = useState('');
  const [KurtasSleeves, setKurtasSleeves] = useState('');
  const [KurtasChest, setKurtasChest] = useState('');
  const [KurtasOther, setKurtasOther] = useState('');

  const [SuitsShoulder, setSuitsShoulder] = useState('');
  const [SuitsSleeves, setSuitsSleeves] = useState('');
  const [SuitsChest, setSuitsChest] = useState('');
  const [SuitsLength, setSuitsLength] = useState(''); 

  const TypeSelection = (tailorId, type) => {
  
    if (type === 'Shirt') {
      setShirtOpen(true);
    } else if (type === 'Pants') {
      setPantOpen(true);
    } else if (type === 'Kurtas') {
      setKurtasOpen(true);
    } else if (type === 'Suits') {
      setSuitsOpen(true);
    }
  };
 
  const handleSubmit = () => {
    const customerData = {
      Customername,
      Customernumber,
      Shirt: {
        shoulder: ShirtShoulder,
        sleeves: ShirtSleeves,
        chest: ShirtChest,
        Length: ShirtLength, 
      },
      Pants: {
        waist: PantsWaist,
        length: PantsLength,
        hip: PantsHip,
        inseam: PantsInseam,
      },
      Kurtas: {
        shoulder: KurtasShoulder,
        sleeves: KurtasSleeves,
        chest: KurtasChest,
        other: KurtasOther,
      },
      Suits: {
        shoulder: SuitsShoulder,
        sleeves: SuitsSleeves,
        chest: SuitsChest,
        Length: SuitsLength,
      },
    };

    dispatch(
      Add_Customer( 
        customerData,
        '',
        '',
        {
          shoulder:'',
          sleeves: '',
          chest: '',
          Length: '',
        },
        {
          Waist: '',
          length: '',
          hip: '',
          inseam: '',
        },
        {
          shoulder: '',
          sleeves: '',
          chest: '',
          other: '',
        },
        {
          shoulder: '',
          sleeves: '',
          chest: '',
          Length: '',
        },
       
      )
    );
    // console.log('Customerdata: ', customerData);
  };
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Invoice</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.labels}>Customer Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Customer Name"
            value={Customername}
            onChangeText={(text) => setCustomername(text)}
          />

          <Text style={styles.labels}>Customer Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Customer Number"
            keyboardType="phone-pad"
            value={Customernumber}
            onChangeText={(text) => setCustomernumber(text)}
          />

        </View>
        <View style={styles.tailorInfo}>

          {tailordata.map((item) => (
            <View key={item.Tailorid} style={styles.tailorItem}>
              <Text style={styles.tailorLabel}>Tailor : {item.Tailorid}</Text>

              <View style={styles.checkmarkContainer}>
                {data.map((itemData) => (
                  <TouchableOpacity
                    key={itemData.value}
                    onPress={() => TypeSelection(item.Tailorid, itemData.value)}
                    style={{}}>
                    <Text style={{ width: 80, height: 30, fontSize: 20, color: '#36454F', marginRight: 20, backgroundColor: '#e5e5e5', borderRadius: 5, }}>✓{itemData.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <ScrollView
                horizontal
                contentContainerStyle={{ flexGrow: 1 }}
              >
                <View style={{ flexDirection: 'row', width: 550 }}>

                  {shirtopen && (
                    <View style={styles.dropdown}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Shirt nape</Text>
                      <TextInput
                        key="Shoulder"
                        style={styles.input}
                        placeholder="Shoulder"
                        value={ShirtShoulder}
                        onChangeText={(text) => setShirtShoulder(text)} 
                      />
                      <TextInput
                        key="Sleeves"
                        style={styles.input}
                        placeholder="Sleeves"
                        value={ShirtSleeves}
                        onChangeText={(text) => setShirtSleeves(text)} 
                      />
                      <TextInput
                        key="Chest"
                        style={styles.input}
                        placeholder="Chest"
                        value={ShirtChest}
                        onChangeText={(text) => setShirtChest(text)}
                      />
                      <TextInput
                        key="Length"
                        style={styles.input}
                        placeholder="Length"
                        value={ShirtLength}
                        onChangeText={(text) => setShirtLength(text)}
                      />
                    </View>
                  )}

                  {Pantopen && (
                    <View style={styles.dropdowns}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Pants nape</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Waist"
                        value={PantsWaist}
                        onChangeText={(text) => setPantsWaist(text)}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Length"
                        value={PantsLength}
                        onChangeText={(text) => setPantsLength(text)}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Hip"
                        value={PantsHip}
                        onChangeText={(text) => setPantsHip(text)}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Inseam"
                        value={PantsInseam}
                        onChangeText={(text) => setPantsInseam(text)} 
                      />
                    </View>
                  )}

                  {Kurtasopen && (
                    <View style={styles.dropdowns}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Kurtas nape</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Shoulder"
                        value={KurtasShoulder}
                        onChangeText={(text) => setKurtasShoulder(text)} 
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Sleeves"
                        value={KurtasSleeves}
                        onChangeText={(text) => setKurtasSleeves(text)} 
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Chest"
                        value={KurtasChest}
                        onChangeText={(text) => setKurtasChest(text)}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Other"
                        value={KurtasOther}
                        onChangeText={(text) => setKurtasOther(text)} 
                      />
                    </View>
                  )}

                  {Suitsopen && (
                    <View style={styles.dropdowns}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Suits nape</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Shoulder"
                        value={SuitsShoulder}
                        onChangeText={(text) => setSuitsShoulder(text)} 
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Sleeves"
                        value={SuitsSleeves}
                        onChangeText={(text) => setSuitsSleeves(text)}
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Chest"
                        value={SuitsChest}
                        onChangeText={(text) => setSuitsChest(text)} 
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Length"
                        value={SuitsLength}
                        onChangeText={(text) => setSuitsLength(text)} 
                      />
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
          ))}
        </View>
        <View>
        </View>
      </View>
      <View style={{ backgroundColor: '#36454F' }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleSubmit}
        >
          <Text style={styles.addButtonText}>Submit</Text> 
        </TouchableOpacity>
      </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 'auto',
    height: 800,
    backgroundColor: '#36454F',
    padding: 16,
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#36454F',
    fontWeight: 'bold',
  },
  customerInfo: {
    marginTop: 20,
    color: 'white',
  },
  labels: {
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 5,
  },
  tailorInfo: {
    marginTop: 20,
  },
  tailorItem: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  tailorLabel: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  checkmarkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  checkmark: {
    fontSize: 20,
    marginRight: 30,
    alignSelf: 'center',
    borderColor: 'lightgreen',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  selectedCheckmark: {
    backgroundColor: 'lightgreen',
  },
  dropdown: {
    backgroundColor: '#36454F',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginRight: 0,
  },
  dropdowns: {
    backgroundColor: '#36454F',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginRight: 0,
  },
  addButton: {
    backgroundColor: '#36454F',
    padding: 15,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
  },
  addButtonText: {
    color: 'white',

    width: 200,
    height: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});


export default InvoiceScreen;
