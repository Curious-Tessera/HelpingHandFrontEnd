import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  image: {
    height: '50%',
    width: '50%',
    resizeMode: 'center'
  },
  title: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 15,
    color: '#323232'
  }
});

const Loading = () => (
  <View style={styles.center}>
    <Image style={styles.image}
      source={require('resources/images/hands.png')}
    />
    <Text style={styles.title}>loading...</Text>
  </View>
);

export default Loading;
