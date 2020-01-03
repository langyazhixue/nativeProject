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
  Platform, // 平台判断
  Dimensions, // 获取屏幕高度和宽度
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {WebView} from 'react-native-webview';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import List from './screen/List/index';

function ComponentIOS() {
  return (
    <View>
      <Text>IOS</Text>
    </View>
  );
}

function ComponentAndriod() {
  return (
    <View>
      <Text>AndRiod</Text>
    </View>
  );
}

const ComponentViewTest = Platform.select({
  ios: ComponentIOS,
  android: ComponentAndriod,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      inputValue: '',
    };
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {/* 刘海屏幕 */}
        <SafeAreaView style={styles.containerStyle}>
          {/* <ScrollView contentInsetAdjustmentBehavior="automatic">
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
                  value={this.state.inputValue}
                  placeholderTextColor={'red'}
                  keyboardType={'number-pad'}
                  clearButtonMode={'while-editing'}
                  onChangeText={text => {
                    this.setState({
                      inputValue: text,
                    });
                  }}
                  // secureTextEntry={true}
                  returnKeyType="done"
                  onSubmitEditing={event => {
                    console.log(event.nativeEvent);
                  }}
                />
              </View>
              <View style={{width, height: 30, backgroundColor: 'red'}} />
              {Platform.OS === 'ios' ? (
                <View>
                  <Text>ios</Text>
                </View>
              ) : (
                <View>
                  <Text>Andriod</Text>
                </View>
              )}

              <ComponentViewTest />
            </View>
          </ScrollView> */}

          {/* <WebView
            source={{
              uri: 'https://github.com/facebook/react-native',
            }}
            style={{marginTop: 20}}
          /> */}
          <List />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'green',
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
