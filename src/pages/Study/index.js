import {createStackNavigator} from 'react-navigation-stack';
import ListStudy from './ListStudy/index';
import NavigationOptionsStudy from './NavigationOptionsStudy/index';
import NavigationOptionsStudyDetail1 from './NavigationOptionsStudyDetail1/index';
import NavigationOptionsStudyDetail2 from './NavigationOptionsStudyDetail2/index';
import HttpStudy from './HttpStudy/index';
import InputStudy from './InputStudy/index';
import AsyncStorage from './AsyncStorage/index';
import OffLineStorage from './OffLineStorage/index';
import FlatListStudy from './FlatListStudy/index';
import {defaultNavigatiionOptions} from '../../globalSetting';
const StudyNavigator = createStackNavigator(
  {
    Home: {
      screen: ListStudy,
      // path(可选)， 用来设置支持schema跳转时使⽤，具体使⽤会在下文的有关 Schema 章节中讲到
      navigationOptions: {
        // 导航本身的导航选项，用于配置父导航器
        title: '列表学习',
        //headerBackTitle: '返回',
        // title: // //可以作为headerTitle的备选字段(当设置headerTitle时候会用该字段作为标题),
        // header: // 自定义导航条，可以通过设置null来隐藏导航条;
        // headerTitle: 标题
        // headerTitleAllowFontScaling: 标题是否允许缩放，默认true;
        // headerBackTitle: 定义在iOS上当前⻚面进入到下⼀页面的回退标题，可以通过设置null来禁用 它;
        // headerTruncatedBackTitle: 当回退标题不能显示的时候显示此属性的标题，⽐比如回退标题太⻓ 了;
        // headerBackImage, React元素或者组件在标题的后退按钮中显示自定义图片
        // headerRight: 定义导航栏右边视图;
        // headerLeft: 定义导航栏左边视图;
        // headerLeftContainerStyle: ⾃定义 headerLeft 组件容器的样式，例如，增加 padding。
        // headerRightContainerStyle: ⾃定义 headerRight 组件容器的样式,，例如，增加 padding。
        // headerTitleContainerStyle: ⾃定义 headerTitle 组件容器的样式, 例如，增加 padding。
        // headerBackTitleStyle: 定义返回标题的样式;
        // gesturesEnabled: 定义是否能侧滑返回，iOS默认true，Android默认false;
        // gestureResponseDistance: 定义滑动返回的有效距离，⽔水平状态下默认:25，垂直状态默认 135;
        // gestureDirection: 设置关闭⼿手势的⽅方向。默认从左向右，可以设置从右到左的滑动操作。
      },
    },
    NavigationOptionsStudy: {
      screen: NavigationOptionsStudy,
      navigationOptions: {
        headerTitle: '导航学习',
      },
    },
    NavigationOptionsStudyDetail1: {
      screen: NavigationOptionsStudyDetail1,
      navigationOptions: {
        headerTitle: 'NavigationOptionsStudyDetail1',
      },
    },
    NavigationOptionsStudyDetail2: {
      screen: NavigationOptionsStudyDetail2,
      navigationOptions: {
        headerTitle: 'NavigationOptionsStudyDetail2',
      },
    },
    InputStudy: {
      screen: InputStudy,
      navigationOptions: props => {
        const {navigation} = props;
        const {state} = navigation;
        const {params} = state;
        return {
          title: params.title,
        };
      },
    },
    HttpStudy: {
      screen: HttpStudy,
    },
    AsyncStorage: {
      screen: AsyncStorage,
    },
    OffLineStorage: {
      screen: OffLineStorage,
    },
    FlatListStudy: {
      screen: FlatListStudy,
    },
  },
  {
    // 默认的导航栏信息在这里配置,根据作用不同分为路由配置、视图样式配置两类
    initialRouteName: 'Home', //设置默认的页面组件，必须是上⾯已注册的⻚面组件。 路由配置
    // initialRouteKey: 'homeKey',  // 初始路路由的参数  路由配置
    initialRouteParams: {
      headerTitle: '列表学习',
    }, // 初始路路由的可选标识符 路由配置
    // disableKeyboardHandling: true, // 如果为true 则导航到新屏幕时键盘不会自动关闭
    defaultNavigationOptions: {...defaultNavigatiionOptions}, // 屏幕导航的默认选项视图样式
    mode: 'card', // 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal 效果) // 视图样式
    headerMode: 'screen', //  导航栏的显示模式: screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航 栏。
    // headerBackTitleVisible: false, // 提供合理的默认值以确定后退按钮标题是否可见，但如果要覆盖它，则可以使用true或` false 在此选项中。
    cardStyle: {
      // IOS 上页面切换会有白色渐变蒙层，想去掉可以这样设置，切换时候页面边框也可以在这里设置
      opacity: null,
    },
    onTransitionStart: () => {
      console.log('页面跳转动画开始');
    },
    // onTransitionStart 页面切换开始时候的回调函数(我们可以在这里注册一些通知，告知页面切页面状态，方便后面处理页面切换事件)
    onTransitionEnd: () => {
      console.log('页面跳转动画结束');
    }, // 页面切换结束时间时候的回调函数
  },
);
export default StudyNavigator;
