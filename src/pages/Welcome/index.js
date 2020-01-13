import React, {Component} from 'react';

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default class WelcomePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 2000);
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>1</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  },
});
