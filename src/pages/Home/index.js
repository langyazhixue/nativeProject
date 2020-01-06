import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home/index';
import {defaultNavigationOptions} from '../../globalSetting';
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      // path(可选)， 用来设置支持schema跳转时使⽤用，具体使⽤会在下⽂文的有关 Schema 章节中讲到
      navigationOptions: {
        title: '首页', //可以作为headerTitle的备选字段(当没设置headerTitle时候会用该字段作为标题),
        // header: // ⾃自定义导航条，可以通过设置null来隐藏导航条;
        // headerTitle: 标题
        // headerTitleAllowFontScaling: 标题是否允许缩放，默认true;
        // headerBackTitle: 定义在iOS上当前⻚页⾯面进⼊入到下⼀一⻚页⾯面的回退标题，可以通过设置null来禁用 它;
        // headerTruncatedBackTitle: 当回退标题不不能显示的时候显示此属性的标题，⽐比如回退标题太⻓ 了;
        // headerBackImage, React元素或者组件在标题的后退按钮中显示自定义图片
        // headerRight: 定义导航栏右边视图;
        // headerLeft: 定义导航栏左边视图;
        // headerLeftContainerStyle:⾃定义 headerLeft 组件容器的样式，例如，增加 padding。
        // headerRightContainerStyle:⾃定义 headerRight 组件容器的样式,，例如，增加 padding。
        // headerTitleContainerStyle:⾃定义 headerTitle 组件容器的样式, 例如，增加 padding。
        // headerBackTitleStyle: 定义返回标题的样式;
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    // initialRouteKey: 'homeKey',
    // initialRouteParams: 'jxx',
    // disableKeyboardHandling: true, // 如果为true 则导航到新屏幕时键盘不不会⾃自动关闭
    defaultNavigationOptions: {...defaultNavigationOptions},
    mode: 'card', // 页面切换模式， 左右是card(相当于IOS中的push效果)，上下相当于modal(相当于IOS中的modal效果)
  },
);

export default HomeNavigator;
