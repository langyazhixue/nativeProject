import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeNavigator from '../pages/Home';
import CompanyNavigator from '../pages/Company';
import MyNavigator from '../pages/My';
import MessageNavigator from '../pages/Message';
import StudyNavigator from '../pages/Study';
import Icon from 'react-native-vector-icons/FontAwesome';
import {variableStyle} from '../styles/variables';

import WelcomePage from '../pages/Welcome/';
// createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig)
// RouteConfigs(必选)：路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么
// BottomTabNavigatorConfig(可选)： 配置导航器的路由(如：默认首屏，navigationOptions， paths等)样式(如，转场模式`mode`, 头部模式等)

const RootTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeNavigator, // 指定⼀一个 React 组件作为屏幕的主要显示内容，当这个组件被TabNavigator加载 时，它会被分配⼀一个navigation prop。
      // path:可选，⽤来设置⽀持schema跳转时使用，
      navigationOptions: {
        // 可选， 用以配置全局的屏幕导航选项：
        title: '首页', // 可以⽤用作headerTitle和tabBarLabel的备选的通⽤用标题。
        // tabBarIcon: () => {
        //   return <Icon name={'home'} size={20} />;
        // },
        // tabBarVisible: true, // 显示或隐藏TabBar, 默认显示
        // tabBarIcon: //  设置TabBar的图标
        // tabBarLabel // 显示在选项卡栏中的选项卡的标题字符串或给定{focused：boolean,tintColor：string}的函数将返回React.Node，以显示在选项卡栏中
        // tabBarOnPress: ev => {
        //   console.log(ev); // navigation
        // }, //Tab呗点击的回调函数，它的参数是包含变量的对象
        // ---- navigation: navigation prop
        // ---- defaultHandler
        // tabBarOnLongPress // 回调以处理长按事件；参数是一个包含以下内容的对象
        // ---- navigation: navigation prop
        // ---- defaultHandler
        // tabBarButtonComponent:  React组件，它包装图标和标签实现onPress,默认情况下是TouchableWithoutFeedback的⼀一个封装，使其其表现与其它可点击组件相同，
        // tabBarButtonComponent: TouchableOpacity 将使⽤用 TouchableOpacity 来替代;

        // tabBarAccessibilityLabel： 选项卡按钮的辅助功能标签，当用户点击标签时候，屏幕阅读器会阅读这些信息。如果您没有选项卡的标签，建议设置

        // tabBarTestID: 用于在测试中找到该选项卡按钮的ID
      },
    },
    CompanyTab: {
      screen: CompanyNavigator,
      navigationOptions: {
        title: '公司',
        //tabBarVisible: false, // 切到公司，下面的导航栏就没了
        // tabBarIcon: ({tintColor, focused}) => {
        // tintColor 当前状态下Tab的颜色
        // focused: Tab 是否被选中
        // },
      },
    },
    MessageTab: {
      screen: MessageNavigator,
      navigationOptions: {
        title: '消息',
      },
    },

    MyTab: {
      screen: MyNavigator,
      navigationOptions: {
        title: '我的',
      },
    },
    StudyTab: {
      screen: StudyNavigator,
      navigationOptions: {
        title: '学习',
      },
    },
  },
  {
    initialRouteName: 'HomeTab', // 第一次加载时初始选项卡路由的 routeName
    order: ['HomeTab', 'CompanyTab', 'MessageTab', 'MyTab', 'StudyTab'], // 定义选项卡顺序的 routeNames 数组
    defaultNavigationOptions: ({navigation}) => {
      // console.group('navigation');
      // console.log(navigation);
      let tabBarVisible = true;
      // 详情页面，
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        // 用于屏幕的默认导航选项
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          // console.group('tabBarIcon');
          // console.log(tintColor);
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'HomeTab') {
            iconName = 'home';
          } else if (routeName === 'CompanyTab') {
            iconName = 'apple';
          } else if (routeName === 'MessageTab') {
            iconName = 'weixin';
          } else if (routeName === 'MyTab') {
            iconName = 'user';
          } else if (routeName === 'StudyTab') {
            iconName = 'inbox';
          }
          return <Icon name={iconName} size={20} color={tintColor} />;
        },
        tabBarOnPress: ev => {
          console.log(ev);
          ev.defaultHandler();
        },
        tabBarVisible,
      };
    },
    tabBarOptions: {
      activeTintColor: variableStyle.tabTitleActiveColor, // 设置TabBar选中状态下的标签和图标颜色
      // activeBackgroundColor -活动选项卡的背景色
      // inactiveBackgroundColor -非活动选项卡的背景色。
      inactiveTintColor: variableStyle.tabTitleInActiveColor, // 设置TabBar
      showIcon: true, // 是否展示图标，默认是false
      showLabel: true, // 是否展示标签，默认是true
      upperCaseLabel: true, // 是否使标签大写，默认是 true
      tabStyle: {
        paddingTop: 10,
        height: 60,
      }, // 设置单个tab的样式
      labelPosition: 'below-icon', // - 与标签图标相关的标签标签显示位置。 可用值为beside-icon和below-icon。 默认为beside-icon
      labelStyle: {
        paddingTop: 2,
        fontSize: 16,
      }, // 设置TabBar标签的样式
      iconStyle: {}, // 设置图标的样式
      style: {}, // 设置整个TabBar的样式
      allowFontScaling: true, // 设置 TabBar标签是否支持缩放，默认支持；
      // safeAreaInset 覆盖的 forceInsetprop，默认是{ bottom: 'always', top: 'never' }， 可选值：top| bottom|left|right('always|never')
    },
    resetOnBlur: false, // 切换离开屏幕时，重置所有嵌套导航器的状态， 默认值： false。
    // paths: 提供 routeName 到 path config 的映射，它覆盖routeConfigs 中设置的路径
    backBehavior: 'initialRoute', // initialRoute返回初始选项卡，order返回上一个选项卡，history返回上次访问标签或none。
  },
);

export const RootInitNavigator = createStackNavigator({
  welcome: {
    screen: WelcomePage,
  },
});

export default RootTabNavigator;
