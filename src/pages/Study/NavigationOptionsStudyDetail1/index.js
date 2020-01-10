import React from 'react';
import {layoutStyles} from '../../../styles/layout';
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
          <View>
            <Text>NavigationOptionsStudyDetail1</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
