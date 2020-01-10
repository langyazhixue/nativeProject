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

import {NavigationActions} from 'react-navigation';

export default class NavigationOptionsStudyScreen extends React.Component {
  // 1. 静态属性配置 导航页面的属性，
  // 2. setParams  动态修改参数
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      setParams,
      state: {params},
    } = navigation;
    return {
      title: params.title,
      headerRight: (
        <Button
          title={params.mode === 'edit' ? '保存' : '编辑'}
          onPress={() => {
            setParams({
              mode: params.mode === 'edit' ? 'save' : 'edit',
            });
            // navigation.navigate('ThirdDetail', {
            //   myTitle: '第三详情页',
            // });
          }}
        />
      ),
    };
  };

  // 页面跳转,在学习导航器之前，我们需要了解两个和导航有关的概念
  // ----- 1. Screen navigation prop(屏幕导航属性):通过navigation可以完成屏幕之间的调度操作，例如打 开另一个屏幕
  // ------ 2. Screen navigation Options(屏幕导航选项):通过navigationOptions可以定制导航器器显示屏幕的 ⽅方式(例例如:头部标题，选项卡标签等)

  // ----1. Screen Navigation Prop 屏幕导航属性 navigation
  // ---- 当导航器中的屏幕被打开时候，它会接收到一个navigation prop ，它是整个导航环节的关键属性
  // --- 重要的是要强调navigation prop 不传递给所有组件; 只有screen组件会自动收到此 prop！ React Navigation在这里没有做神奇的操作。


  // 1.  获取 { navigation } = this.props
  // 2. navigation.navigate('Page3',{ name: 'Devio' });
  // 3. navigation.goBack() // 返回上一页面
  // 4. navigation.setParams 更新⻚面Params
  // 5. state: 屏幕当前的state
  // 6. dispatch:向路由发送⼀个action
  // 7. addListener:订阅导航生命周期的更新
  // 8. isFocused: true标识屏幕获取了了焦点
  // 9. getParam: 获取具有回退的特定参数
  // 10. dangerouslyGetParent:返回⽗父导航器器
  

  //  注意--------
  // 一个 navigation 有可能没有 navigate, setParams 以及 goBack, 只有state与 dispatch,
  // 因为 navigation prop 不传递给所有组件;只有 screen 组件会自动收到此 prop!所以在使用navigate 时要进行判断，如果没有navigate可以使⽤navigation去dispatch⼀个新的action

  // StackNavigator 的 navigation 的额外功能
  // ------当且仅当当前navigator 是 StackNavigator 时候， this.props.navigation 上有一些附加功能。
  // ------这些函数是navigate和goBack的替代⽅方法

  // 1. this.props.navigation
  // 1.1Push :导航到堆栈中的⼀一个新路路由
  // 2.2 pop:返回栈中的上⼀个⻚面
  // 3.3 popToTop:跳转到堆栈中最顶层的⻚页⾯面
  // 4.4 replace:⽤新路由替换当前路由
  // 5.5 reset:擦除导航器状态并将其替换为多个操作的结果
  // 6.6 dismiss:关闭当前栈
  

// 可行
  _goBack = () => {
    this.props.navigation.goBack('id-1578470526102-4');
  };
  // 可行
  navigate = () => {
    // navigation.navigate() 如果栈中已经有这个页面了，是不会进入新页面的
    // this.props.navigation.push('Third');
  };
  // 可行
  _popToPop = () => {
    this.props.navigation.popToTop(); // 关闭当前栈
  };
  // 不可行
  _dismiss = () => {
    this.props.navigation.dismiss()
  }
  // 所有NavigationActions返回可以使用navigation.dispatch()方法发送到路由器的对象，支持以下操作
// 1 navigate - 导航到另一条路由
// 2 back - 回到之前的状态
// 3 setParams - 设置给定路由的参数
// 4 init 用于在状态未定义时初始化第一个状态


// ---- navigate {
  // routeName
  // params 可选
  // action: 可选 Object 如果屏幕是导航器，则在子路由器中运行的子操作。 此文档中描述的任何一个操作都可以设置为子操作。
// }
  _myNavigationActions = ()  => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Home',
      params: {
        headerTitle:'列表页面2'
      },
      action: NavigationActions.navigate({routeName: 'InputStudy'}),
    });
    // 可以导航到首页
    this.props.navigation.dispatch(navigateAction);
  };
  // 可行
  _replace = () => {
    console.log(this.props)
    this.props.navigation.replace('InputStudy',{
      title:'InputStudy'
    })
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
          <View>
            <Button title="关闭当前栈" onPress={this._dismiss} />
          </View>
          <View>
            <Button title="⽤新路由替换当前路由" onPress={this._replace} />
          </View>
          <View>
            <Button title="NavigationActions_navigate" onPress={this._myNavigationActions} />
          </View>

        </View>
      </SafeAreaView>
    );
  }
}
