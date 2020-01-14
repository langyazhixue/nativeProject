import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {SwitchActions} from 'react-navigation';
export default class WelcomePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Main');
    }, 5000);
  }
  static navigationOptions = {
    header: null,
  };
  _handlerJump = () => {
    this.props.navigation.dispatch(SwitchActions.jumpTo({routeName: 'Main'}));
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>欢迎页面</Text>
          <View style={styles.welcome}>
            <Button title="跳过" color="#fff" onPress={this._handlerJump} />
          </View>
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
