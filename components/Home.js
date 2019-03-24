import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
  	const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen!</Text>
        <View style={{ width: "50%", margin: 10 }}>
        	<Button color="orange" raised={false} title="Go to profile" onPress={() => navigate('Profile', {username: 'computerwizard'})} />
        </View> 
        <View style={{ width: "50%", margin: 10 }}>
        	<Button color="orange" title="Go to feed" onPress={() => navigate('Feed')} />
		</View>      
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


export default HomeScreen;