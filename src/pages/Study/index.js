import {createStackNavigator} from 'react-navigation-stack';
import ListStudy from './ListStudy/index';
import NavigationOptionsStudy from './NavigationOptionsStudy/index';
import {defaultNavigatiionOptions} from '../../globalSetting';

const MyNavigator = createStackNavigator(
  {
    ListStudy: {
      screen: ListStudy,
      // path(可选)， 用来设置支持schema跳转时使⽤用，具体使⽤会在下⽂文的有关 Schema 章节中讲到
      navigationOptions: {
        // 导航本身的导航选项，用于配置父导航器
        headerTitle: '列表学习',
        // title: // //可以作为headerTitle的备选字段(当没设置headerTitle时候会用该字段作为标题),
        // header: // ⾃自定义导航条，可以通过设置null来隐藏导航条;
        // headerTitle: 标题
        // headerTitleAllowFontScaling: 标题是否允许缩放，默认true;
        // headerBackTitle: 定义在iOS上当前⻚页⾯面进⼊入到下⼀一⻚页⾯面的回退标题，可以通过设置null来禁用 它;
        // headerTruncatedBackTitle: 当回退标题不能显示的时候显示此属性的标题，⽐比如回退标题太⻓ 了;
        // headerBackImage, React元素或者组件在标题的后退按钮中显示自定义图片
        // headerRight: 定义导航栏右边视图;
        // headerLeft: 定义导航栏左边视图;
        // headerLeftContainerStyle:⾃定义 headerLeft 组件容器的样式，例如，增加 padding。
        // headerRightContainerStyle:⾃定义 headerRight 组件容器的样式,，例如，增加 padding。
        // headerTitleContainerStyle:⾃定义 headerTitle 组件容器的样式, 例如，增加 padding。
        // headerBackTitleStyle: 定义返回标题的样式;
        // gesturesEnabled: 定义是否能侧滑返回，iOS默认true，Android默认false;
        // gestureResponseDistance: 定义滑动返回的有效距离，⽔水平状态下默认:25，垂直状态默认 135;
        // gestureDirection: 设置关闭⼿手势的⽅方向。默认从左向右，可以设置从右到左的滑动操作。
      },
    },
    NavigationOptionsStudy: {
      screen: NavigationOptionsStudy,
      navigationOptions: {
        headerTitle: '导航react-navigation-stack 学习',
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置,根据作用不同分为路由配置、视图样式配置两类
    initialRouteName: 'List', //设置默认的⻚页⾯面组件，必须是上⾯面已注册的⻚页⾯面组件。 路由配置
    // initialRouteKey: 'homeKey',  // 初始路路由的参数  路由配置
    // initialRouteParams: 'jxx', // 初始路路由的可选标识符 路由配置
    // disableKeyboardHandling: true, // 如果为true 则导航到新屏幕时键盘不会自动关闭
    defaultNavigationOptions: {...defaultNavigatiionOptions}, // 屏幕导航的默认选项视图样式
    mode: 'card', // 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal 效果) // 视图样式
    headerMode: 'screen', //  导航栏的显示模式: screen: 有渐变透明效果, float: ⽆无透明效果, none: 隐藏导航 栏。
    headerBackTitleVisible: false, // 提供合理理的默认值以确定后退按钮标题是否可⻅见，但如果要覆盖它，则 可以使⽤用true或` false 在此选项中。
    cardStyle: {
      // IOS 上页面切换会有白色渐变蒙层，想去掉可以这样设置，切换时候页面边框也可以在这里设置
      opacity: null,
    },
    // onTransitionStart 页面切换开始时候的回调函数(我们可以在这里注册一些通知，告知页面切页面状态，方便后面处理页面切换事件)
    // onTransitionEnd 页面切换结束时间时候的回调函数
  },
);
export default MyNavigator;
