import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

//withNavigationFocus

//withNavigationFocus withNavigation是一个高阶组件，它可以将 isFocused `这个 prop 传递到一个包装的组件。
// 如果你需要在页面组件的 render 方法中使用焦点状态，或者在页面内某个位置渲染另一个组件时，这个组件很有用

class FocusStateLabel extends React.Component {
  render() {
    return <Text>{this.props.isFocused ? 'Focused' : 'Not focused'}</Text>;
  }
}
export default withNavigationFocus(FocusStateLabel);
