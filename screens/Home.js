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
    {id: 1, name: 'Jame', position: 'web dev'},
    {id: 2, name: 'Peter', position: 'android dev'},
    {id: 3, name: 'Lucy', position: 'ios dev'},
    {id: 4, name: 'Adam', position: 'backend dev'},
    {id: 5, name: 'Jame', position: 'web dev'},
    {id: 6, name: 'Peter', position: 'android dev'},
    {id: 7, name: 'Lucy', position: 'ios dev'},
    {id: 8, name: 'Adam', position: 'backend dev'},
    {id: 9, name: 'Jame', position: 'web dev'},
    {id: 10, name: 'Peter', position: 'android dev'},
    {id: 11, name: 'Lucy', position: 'ios dev'},
    {id: 12, name: 'Adam', position: 'backend dev'},
  ];

  const renderItem = ({item}) => {
    return (
      <Card
        style={styles.maycard}
        onPress={() => navigation.navigate('Profile')}>
        <View style={styles.cardView}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
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
    <SafeAreaView>
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
