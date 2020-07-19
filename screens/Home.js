import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Jame McCarthy',
      position: 'web dev',
      salary: '10000 ฿',
      phone: '1233454',
      email: 'abc@mail.com',
      picture:
        'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3011&q=80',
    },
    {
      id: 2,
      name: 'Paul Smith',
      position: 'mobile dev',
      salary: '10000 ฿',
      phone: '1233454',
      email: 'abc@mail.com',
      picture:
        'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3011&q=80',
    },
    {
      id: 3,
      name: 'Maxxi Roregrez',
      position: 'backend dev',
      salary: '10000 ฿',
      phone: '1233454',
      email: 'abc@mail.com',
      picture:
        'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3011&q=80',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Card
        style={styles.maycard}
        onPress={() => navigation.navigate('Profile', {item})}>
        <View style={styles.cardView}>
          <Image
            style={styles.image}
            source={{
              uri: item.picture,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        theme={{colors: {accent: '#006aff'}}}
        onPress={() => navigation.navigate('Create')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 40,
    right: 0,
    bottom: 0,
  },
});

export default Home;
