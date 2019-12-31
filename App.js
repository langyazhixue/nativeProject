/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  StatusBar,
  Alert,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// var Dimensions = require('Dimensions');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {/* 刘海屏幕 */}
        <SafeAreaView style={styles.containerStyle}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.containerStyle}>
            <View style={styles.buttonView}>
              <View>
                <Text>11</Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  console.log('onPress');
                }}
                onPressIn={() => {
                  console.log('onPressIn');
                }}
                onPressOut={() => {
                  console.log('onPressOut');
                }}
                onLongPress={() => {
                  console.log('onLongPress');
                }}>
                <View style={styles.button}>
                  <Text>点击</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableHighlight
                onPress={() => {
                  console.log('onPress');
                }}
                activeOpacity={0.1}
                underlayColor="blue">
                <View style={styles.button}>
                  <Text>点击</Text>
                </View>
              </TouchableHighlight>
              <Button
                title={'点击'}
                color="red"
                onPress={() => {
                  this.setState({
                    animating: !this.state.animating,
                  });
                  // Alert.alert('dianjil');
                }}
              />

              <ActivityIndicator
                size="large"
                color="red"
                animating={this.state.animating}
              />

              <Image source={require('./images/log.jpg')} />
              {/* 显示网络图片 */}
              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/docs/assets/favicon.png',
                }}
              />
              <View style={{width: '100%'}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="请输入6为数字密码"
                  value={'default'}
                  placeholderTextColor={'red'}
                  keyboardType={'number-pad'}
                  clearButtonMode={'while-editing'}
                  onChangeText={text => {
                    console.log(text);
                  }}
                  returnKeyType="done"
                  onSubmitEditing={event => {
                    console.log(event);;
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    minHeight: 500,
    flex: 1,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    width: 50,
    height: 50,
    display: 'flex',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    marginHorizontal: 40,
    height: 30,
    borderWidth: 1,
    borderColor: '#7fff00',
    // width: '100%',
    // boxSizing: 'border-box',
  },
});
