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
      // path:可选，⽤来设置⽀持schema跳转时使用，具体使用会在下文的有关 Schema 章节中讲到;
      navigationOptions: {
        // 可选， 用以配置全局的屏幕导航选项：
        title: '首页', // 可以⽤用作headerTitle和tabBarLabel的备选的通⽤用标题。
        tabBarVisible: true, // 显示或隐藏TabBar, 默认显示
        // tabBarIcon: //  设置TabBar的图标
        // tabBarOnPress: //Tab呗点击的回调函数，它的参数是包含变量的对象
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
    // tarBarComponent: 指定 createBottomTabNavigator的TabBar组件, 如果不指定，在 ios 上默认使用 TabBarBottom，在Android平台上默认使⽤用TabBarTop。
    // ------ // TabBarBottom 与 TabBarTop 都是 react-navigation 所⽀支持的组件，要⾃自定义TabBar可 以重写这两个组件也可以根据需要⾃自⼰己实现⼀一个;
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
    initialRouteName: 'Home', // 默认页面组件， createBottomTabNavigator显示的第⼀个页面;
    // paths: 提供 routeName 到 path config 的映射，它覆盖routeConfigs 中设置的路径
    backBehavior: true, // 后退按钮是否会导致标签切换到初始 tab?如果是，则切换到初始tab, 否则什么也不做，默认为切换到初始tab
  },
);

export default RootTabNavigator;
