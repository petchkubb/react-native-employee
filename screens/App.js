import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Home from './Home.js';
import CreateEmployee from './CreateEmployee.js';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Home /> */}
        <CreateEmployee />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
});

export default App;
