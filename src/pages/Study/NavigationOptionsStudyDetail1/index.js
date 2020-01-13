import React from 'react';
import {layoutStyles} from '../../../styles/layout';
import {NavigationEvents} from 'react-navigation';
import {
  SafeAreaView,
  // StyleSheet,
  // ScrollView,
  View,
  Text,
} from 'react-native';

export default class NavigationOptionsStudyScreen extends React.Component {
  // 静态属性配置 导航页面的属性
  render() {
    return (
      <SafeAreaView style={layoutStyles.appContainer}>
        <View>
          <NavigationEvents
            onWillFocus={payload => console.log('will focus', payload)}
            onDidFocus={payload => console.log('did focus', payload)}
            onWillBlur={payload => console.log('will blur', payload)}
            onDidBlur={payload => console.log('did blur', payload)}
          />
          <View>
            <Text>NavigationOptionsStudyDetail1</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
