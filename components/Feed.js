import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Feed!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	},
  title: {
    fontSize: 20,
    margin: 20
  }
});


export default FeedScreen;