import React from 'react';
import {layoutStyles} from '../../../styles/layout';
import {
  SafeAreaView,
  // StyleSheet,
  // ScrollView,
  View,
  Text,
  // StatusBar,
  Button,
} from 'react-native';

export default class NavigationOptionsStudyScreen extends React.Component {
  // 静态属性配置 导航页面的属性
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      setParams,
      state: {params},
    } = navigation;
    return {
      title: params.title,
      headerBackTitle: params.backTitle,
      headerRight: (
        <Button
          title={params.mode === 'edit' ? '保存' : '编辑'}
          onPress={() => {
            setParams({
              mode: params.mode === 'edit' ? '保存' : '编辑',
            });
            // navigation.navigate('ThirdDetail', {
            //   myTitle: '第三详情页',
            // });
          }}
        />
      ),
    };
  };
  _goBack = () => {
    this.props.navigation.goBack();
  };
  navigate = () => {
    // navigation.navigate() 如果栈中已经有这个页面了，是不会进入新页面的
    // this.props.navigation.push('Third');
  };
  _popToPop = () => {
    this.props.navigation.popToTop();
  };
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View>
          <View>
            <Text>react-navigation-stack study </Text>
          </View>
          <View>
            <Text>react-navigation-stack </Text>
          </View>
          <View>
            <Button title="强制本页跳转" onPress={this.navigate} />
          </View>
          <View>
            <Button title="回退到上一个页面" onPress={this._goBack} />
          </View>
          <View>
            <Button title="回到占顶" onPress={this._popToPop} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
