import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="number-pad"
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
      />
      <TextInput
        label="Salary"
        value={salary}
        onChangeText={(text) => setSalary(text)}
        mode="outlined"
        theme={theme}
        style={styles.inputStyle}
      />
    </View>
  );
};

const theme = {
  colors: {
    primary: '#006aff',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
});

export default CreateEmployee;
