import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Profile extends Component {
   render() {
    const username = this.props.navigation.getParam('username');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Profile!</Text>
        <Text style={styles.title}>{ username }</Text>
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


export default Profile;