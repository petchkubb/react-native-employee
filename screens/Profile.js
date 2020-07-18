import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  return (
    <View style={styles.root}>
      <LinearGradient colors={['#0033ff', '#6bc1ff']} style={{height: '20%'}} />
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3011&q=80',
          }}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
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
});

export default Profile;
