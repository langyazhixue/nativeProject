import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeNavigator from '../pages/Home';
import CompanyNavigator from '../pages/Company';
import MyNavigator from '../pages/My';
import MessageNavigator from '../pages/Message';
import StudyNavigator from '../pages/Study';

// createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig)
// RouteConfigs(必选)：路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么
// BottomTabNavigatorConfig(可选)： 配置导航器的路由(如：默认首屏，navigationOptions， paths等)样式(如，转场模式`mode`, 头部模式等)

const RootTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator, // 指定⼀一个 React 组件作为屏幕的主要显示内容，当这个组件被TabNavigator加载 时，它会被分配⼀一个navigation prop。
      // path:可选，⽤来设置⽀持schema跳转时使用，
      navigationOptions: { 
        // 可选， 用以配置全局的屏幕导航选项：
        title: '首页', // 可以⽤用作headerTitle和tabBarLabel的备选的通⽤用标题。
        tabBarVisible: true, // 显示或隐藏TabBar, 默认显示
        // tabBarIcon: //  设置TabBar的图标
        // tabBarOnPress: //Tab呗点击的回调函数，它的参数是包含变量的对象
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
    Company: {
      screen: CompanyNavigator,
      navigationOptions: {
        title: '公司',
        tabBarVisible:false, // 切到公司，下面的导航栏就没了
        // tabBarIcon: ({tintColor, focused}) => {
          // tintColor 当前状态下Tab的颜色
          // focused: Tab 是否被选中
        // },
      },
    },
    Message: {
      screen: MessageNavigator,
      navigationOptions: {
        title: '消息',
      },
    },

    MyNavigator: {
      screen: MyNavigator,
      navigationOptions: {
        title: '我的',
      },
    },
    StudyNavigator: {
      screen: StudyNavigator,
      navigationOptions: {
        title: '学习',
      },
    },
  },
  {
  initialRouteName: 'Home', // 第一次加载时初始选项卡路由的 routeName
   order:['Home','Company','Message','MyNavigator','StudyNavigator'],  // 定义选项卡顺序的 routeNames 数组   
   defaultNavigationOptions:{  // 用于屏幕的默认导航选项
    }, 
    tabBarOptions: {
      activeTintColor: 'red', // 设置TabBar选中状态下的标签和图标颜色
      inactiveTintColor: 'green', // 设置TabBar
      showIcon: false, // 是否展示图标，默认是false
      showLabel: true, // 是否展示标签，默认是true
      upperCaseLabel: true, // 是否使标签大写，默认是 true
      tabStyle: {}, // 设置单个tab的样式
      indicatorStyle: {}, // 设置indicator(tab下面的那条线) 的样式
      labelStyle: {}, // 设置TabBar标签的样式
      iconStyle: {}, // 设置图标的样式
      style: {}, // 设置整个TabBar的样式
      allowFontScaling: true, // 设置 TabBar标签是否支持缩放，默认支持；
      // safeAreaInset 覆盖的 forceInsetprop，默认是{ bottom: 'always', top: 'never' }， 可选值：top| bottom|left|right('always|never')
    },
    resetOnBlur:false, // 切换离开屏幕时，重置所有嵌套导航器的状态， 默认值： false。
    // paths: 提供 routeName 到 path config 的映射，它覆盖routeConfigs 中设置的路径
    backBehavior: 'initialRoute', // initialRoute返回初始选项卡，order返回上一个选项卡，history返回上次访问标签或none。
  },
);

export default RootTabNavigator;
