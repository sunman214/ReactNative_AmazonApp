import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,Platform
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../components/button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [selectedNation, setSelectedNation] = useState();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressErr, setAddressErr] = useState('');
  const [city, setCity] = useState('');

  const onCheckout = () => {
    if (addressErr) {
      Alert.alert('Fix all fields before submitting error');
      return;
    }
    if (!fullName) {
      Alert.alert('please enter your name');
      return;
    }
    if (!phone) {
      Alert.alert('please enter your phone');
      return;
    }
    console.warn('ngon');
  };

  const validateAddress = () => {
    if (address.length < 6) {
      setAddressErr('Address is too short');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
      <View style={styles.root}>
        <View style={styles.row}>
          <Picker
            selectedValue={selectedNation}
            onValueChange={itemValue => setSelectedNation(itemValue)}>
            {countries.map(country => (
              <Picker.Item
                key={country.code}
                label={country.name}
                value={country.code}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and last name)</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            placeholder="Full name"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            placeholder="Phone number"
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressErr('');
            }}
            style={styles.input}
            placeholder="Address"
          />
          {addressErr && <Text style={styles.addressErr}>{addressErr}</Text>}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            style={styles.input}
            placeholder="City"
          />
        </View>
        <Button text="Check out" onPress={onCheckout} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  root: {padding: 10},
  row: {},
  label: {fontWeight: 'bold'},
  addressErr: {color: 'red'},
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
});
