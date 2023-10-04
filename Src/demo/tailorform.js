import React, { useState,useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Add_tailor } from './action';
import { Update_tailor } from './action';

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity style={styles.checkboxmain} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkboxText}>✓</Text>}
      </View>
      <Text style={styles.checkboxText}>{label}</Text>
    </TouchableOpacity>
  );
};

const TailorForm = ({navigation}) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const tailorData = route.params?.tailor || {};
  const [name, setName] = useState(tailorData.name || '');
  const [number, setNumber] = useState(tailorData.number || '');
  const [shirt, setShirt] = useState();
  const [pant, setPant] = useState();
  const [kurta, setKurta] = useState();
  const [suit, setSuit] = useState();


  useEffect(() => {
    if (tailorData.name) setName(tailorData.name);
    if (tailorData.number) setNumber(tailorData.number);
    if (tailorData.Types) {
      setShirt(tailorData.Types.includes('Shirt'));
      setPant(tailorData.Types.includes('Pant'));
      setKurta(tailorData.Types.includes('Kurta'));
      setSuit(tailorData.Types.includes('Suit'));
    }
  }, [tailorData]);

  const handleSubmit = () => {
    const Types = [];
    if (shirt) Types.push('Shirt'); 
    if (pant) Types.push('Pant');
    if (kurta) Types.push('Kurta');
    if (suit) Types.push('Suit');
  
    if (tailorData.Tailorid) {
     
      dispatch(Update_tailor(tailorData.Tailorid, name, number, Types));
    } else {
      
      dispatch(Add_tailor(name, number, Types));
    }
  
    setName('');
    setNumber('');
    setShirt(); 
    setPant(); 
    setKurta(); 
    setSuit(); 
  
    navigation.goBack();
  };
  return (
    <View style={{flex:1,backgroundColor:'#36454F'}}>
    <View style={{alignSelf:'center',marginTop:200}}>
      <Text style={styles.label}>Tailor's Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Number of Tailor</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Tailor Number"
        value={number}
        onChangeText={(text) => setNumber(text)}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Select Items to Stitch:</Text>
      <View style={styles.checkboxRow}>
        <CustomCheckbox label="Shirt" checked={shirt} onChange={() => setShirt(!shirt)} />
        <CustomCheckbox label="Pant" checked={pant} onChange={() => setPant(!pant)} />
        <CustomCheckbox label="Kurta" checked={kurta} onChange={() => setKurta(!kurta)} />
        <CustomCheckbox label="Suit" checked={suit} onChange={() => setSuit(!suit)} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor:'white',
    // alignSelf:'center',
    padding: 10,
    marginTop: 5,
  },
  checkboxmain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft:10,
    borderRadius: 10, 
  },
  checked: {
    backgroundColor: '#023020',
  },
  checkboxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },
});

export default TailorForm;
