import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home/index';
import {defaultNavigationOptions} from '../../globalSetting';

const CompanyNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: '公司',
      },
    },
  },
  {
    // 默认的导航栏信息在这里配置
    initialRouteName: 'Home',
    defaultNavigationOptions: {...defaultNavigationOptions},
    mode: 'card',
  },
);

export default CompanyNavigator;
