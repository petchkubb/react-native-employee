import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Title, Card, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = (props) => {
  const {
    _id,
    name,
    picture,
    phone,
    salary,
    position,
    email,
  } = props.route.params.item;

  const deleteEmployee = () => {
    fetch('https://a7be28edbe97.ngrok.io/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: _id,
      }),
    })
      .then((res) => res.json())
      .then((deleteEmp) => {
        Alert.alert(`${deleteEmp.name} was deleted`);
        props.navigation.navigate('Home');
      })
      .catch(() => Alert.alert('Something went wrong'));
  };

  const openDail = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:+${phone}`);
    } else {
      Linking.openURL(`tel:+${phone}`);
    }
  };

  return (
    <View style={styles.root}>
      <LinearGradient colors={['#0033ff', '#6bc1ff']} style={{height: '20%'}} />
      <View style={styles.center}>
        <Image
          source={{
            uri: picture,
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.center}>
        <Title>{name}</Title>
        <Text style={{fontSize: 18}}>{position}</Text>
      </View>
      <Card
        style={styles.mycard}
        onPress={() => Linking.openURL(`mailto:${email}`)}>
        <View style={styles.cardContent}>
          <Icon name="email" size={32} color="#006aff" />
          <Text style={styles.text}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.mycard} onPress={() => openDail()}>
        <View style={styles.cardContent}>
          <Icon name="call" size={32} color="#006aff" />
          <Text style={styles.text}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <Icon name="attach-money" size={32} color="#006aff" />
          <Text style={styles.text}>{salary}</Text>
        </View>
      </Card>
      <View style={styles.buttonContainer}>
        <Button
          icon="account-edit"
          mode="contained"
          theme={theme}
          onPress={() => {
            props.navigation.navigate('Create', {
              _id,
              name,
              picture,
              phone,
              salary,
              position,
              email,
            });
          }}>
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          theme={theme}
          onPress={() => deleteEmployee()}>
          Fire Employee
        </Button>
      </View>
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
  imageStyle: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    marginTop: -50,
  },
  center: {
    alignItems: 'center',
    margin: 15,
  },
  mycard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Profile;
