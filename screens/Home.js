import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';

const Home = () => {
  const data = [
    {id: 1, name: 'Jame', position: 'web dev'},
    {id: 2, name: 'Peter', position: 'android dev'},
    {id: 3, name: 'Lucy', position: 'ios dev'},
    {id: 4, name: 'Adam', position: 'backend dev'},
  ];

  const renderList = data.map((item) => {
    return (
      <Card style={styles.maycard} key={item.id}>
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
  });
  return <SafeAreaView>{renderList}</SafeAreaView>;
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
});

export default Home;
