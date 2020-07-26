import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

const CreateEmployee = ({navigation, route}) => {
  const getDetails = (type) => {
    if (route.params) {
      const {name, picture, phone, salary, position, email} = route.params;
      switch (type) {
        case 'name':
          return name;
        case 'phone':
          return phone;
        case 'email':
          return email;
        case 'salary':
          return salary;
        case 'picture':
          return picture;
        case 'position':
          return position;
      }
    }
    return '';
  };

  const [name, setName] = useState(getDetails('name'));
  const [phone, setPhone] = useState(getDetails('phone'));
  const [email, setEmail] = useState(getDetails('email'));
  const [salary, setSalary] = useState(getDetails('salary'));
  const [picture, setPicture] = useState(getDetails('picture'));
  const [position, setPosition] = useState(getDetails('position'));
  const [modal, setModal] = useState(false);
  const [enableShift, setEnableShift] = useState(false);

  const submitData = () => {
    fetch('https://a7be28edbe97.ngrok.io/send-data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        salary,
        picture,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} is save success`);
        navigation.navigate('Home');
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  const updateDetails = () => {
    fetch('https://a7be28edbe97.ngrok.io/update', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: route.params._id,
        name,
        email,
        phone,
        salary,
        picture,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} is updated successfuly`);
        navigation.navigate('Home');
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

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
    <KeyboardAvoidingView
      behavior="position"
      style={styles.root}
      enabled={enableShift}>
      <View>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          onFocus={() => setEnableShift(false)}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setEnableShift(false)}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
        />
        <TextInput
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          onFocus={() => setEnableShift(false)}
          keyboardType="number-pad"
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
        />
        <TextInput
          label="Salary"
          value={salary}
          onChangeText={(text) => setSalary(text)}
          onFocus={() => setEnableShift(true)}
          mode="outlined"
          theme={theme}
          style={styles.inputStyle}
        />
        <TextInput
          label="Position"
          value={position}
          onChangeText={(text) => setPosition(text)}
          onFocus={() => setEnableShift(true)}
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
        {route.params ? (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            onPress={() => updateDetails()}
            theme={theme}>
            Update
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            onPress={() => submitData()}
            theme={theme}>
            Save
          </Button>
        )}
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
    </KeyboardAvoidingView>
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
