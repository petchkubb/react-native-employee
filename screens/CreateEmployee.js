import React, {useState} from 'react';
import {View, StyleSheet, Modal, SafeAreaView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

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
      <Button
        style={styles.inputStyle}
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}
        theme={theme}>
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        icon="content-save"
        mode="contained"
        onPress={() => {}}
        theme={theme}>
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}>
        <SafeAreaView style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="upload"
              mode="contained"
              onPress={() => setModal(false)}
              theme={theme}>
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              onPress={() => setModal(false)}
              theme={theme}>
              Gallary
            </Button>
          </View>
          <Button icon="upload" onPress={() => setModal(false)}>
            Cancel
          </Button>
        </SafeAreaView>
      </Modal>
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
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default CreateEmployee;
