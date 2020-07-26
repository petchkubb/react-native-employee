import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {Card, FAB, ActivityIndicator} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const {data, loading} = useSelector((state) => {
    return state;
  });

  const fetchData = () => {
    fetch('https://a7be28edbe97.ngrok.io/')
      .then((res) => res.json())
      .then((results) => {
        // setData(results);
        // setLoading(false);
        dispatch({type: 'ADD_DATA', payload: results});
        dispatch({type: 'SET_LOADING', payload: false});
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  useEffect(() => fetchData(), []);

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
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <FlatList
            data={data}
            keyExtractor={(item) => String(item._id)}
            renderItem={renderItem}
            onRefresh={() => fetchData()}
            refreshing={loading}
          />
          <FAB
            style={styles.fab}
            icon="plus"
            theme={{colors: {accent: '#006aff'}}}
            onPress={() => navigation.navigate('Create')}
          />
        </>
      )}
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
