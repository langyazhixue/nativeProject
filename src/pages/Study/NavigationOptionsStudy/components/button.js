import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
//withNavigation

//withNavigation是一个高阶组件，它可以将 navigation 这个 prop 传递到一个包装的组件。
// 当你无法直接将<code> navigation 这个 prop 传递给组件，或者不想在深度嵌套的子组件中传递它时，它将非常有用。
class MyBackButton extends Component {
  render() {
    return (
      <Button
        title="Back"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}
export default withNavigation(MyBackButton);
