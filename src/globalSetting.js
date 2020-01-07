import {variableStyle} from './styles/variables';
export const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: variableStyle.bgTagColor,
  },
  headerTintColor: variableStyle.tabTitleColor,
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: variableStyle.barBarTitleFont,
  },
  gestureResponseDistance: 100, // 定义滑动返回的有效距离，水平状态下默认:25，垂直状态默认 135;
  //gesturesEnabled: false,
};
