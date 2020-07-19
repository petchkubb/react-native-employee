import React, {useState} from 'react';
import {View, StyleSheet, Modal, SafeAreaView, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);

  const pickFormCamera = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const type = response.type;
        const source = {
          uri: 'data:image/jpeg;base64,' + response.data,
          type,
          name: 'Image',
        };
        handleUpload(source);
      }
    });
  };
  const pickFormGallery = () => {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const type = response.type;
        const source = {
          uri: 'data:image/jpeg;base64,' + response.data,
          type,
          name: 'Image',
        };
        handleUpload(source);
      }
    });
  };

  const handleUpload = (image) => {
    //https://cloudinary.com
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'du9wveggx');
    data.append('api_key', '328149857846474');
    fetch('https://api.cloudinary.com/v1_1/du9wveggx/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((val) => {
        setPicture(val.secure_url);
        setModal(false);
      })
      .catch((err) => {
        Alert.alert('An Error Occured While Uploading', err);
      });
  };

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
        icon={picture === '' ? 'upload' : 'check'}
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
              onPress={() => pickFormCamera()}
              theme={theme}>
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              onPress={() => pickFormGallery()}
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
