import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Dimensions,
  RefreshControl,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import jsonData from './../menu.json';

export default class ListStudyScreen extends Component {
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      state: {params},
    } = navigation;
    return {
      headerTitle: params.headerTitle,
      headerBackTitle: '返回列表',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      isLoading: true,
      isRefresh: false,
    };
  }
  // 加载数据的方法
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        dataList: jsonData,
      });
      this.setState({
        isLoading: false,
      });
    }, 200);
  };
  _renderItem = ({item}) => {
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          // 界面跳转参数传递
          navigation.navigate(item.stackScreen, item.params);
        }}>
        <Text style={styles.listItem}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  _keyExtractor = (item, index) => {
    return 'index' + index + item.name;
  };
  _renderList = () => {
    return (
      <FlatList
        data={this.state.dataList}
        renderItem={this._renderItem}
        style={styles.listContainer}
        contentContainerStyle={{paddingVertical: 50}} // 显示内容区域的样式
        ListHeaderComponent={this._renderListHeaderComponent}
        // ListEmptyComponent= 列表是空的时候的显示可以替代loading
        ListFooterComponent={this._renderListFooterComponent}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={() => {
          return <View style={{height: 1, backgroundColor: '#999'}} />;
        }}
        // refreshControl 上拉加载更多
        refreshControl={
          <RefreshControl
            title="loading"
            tintColor="red"
            titleColor="red"
            refreshing={this.state.isRefresh}
            onRefresh={() => {
              this.setState({
                isRefresh: true,
              });
              setTimeout(() => {
                // dataList替换掉
                this.setState({
                  dataList: jsonData,
                  isRefresh: false,
                });
              }, 200);
            }}
          />
        }
        // 下拉加载更多
        // 监听滑动到底部的事件
        onEndReachedThreshold={0.1} // 滑动到底部多少的时候触发
        onEndReached={() => {
          // Alert.alert('onEndReached');
        }}
      />
    );
  };
  _renderListHeaderComponent = () => {
    return (
      <View
        style={{
          width,
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>react-native 学习菜单</Text>
      </View>
    );
  };
  // 列表尾部视图
  _renderListFooterComponent = () => {
    return (
      <View
        style={{
          width,
          height: 50,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>react-native 学习尾部</Text>
      </View>
    );
  };
  _renderLoading() {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator size="large" color="gray" animating={true} />
      </View>
    );
  }
  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return this._renderLoading();
    }
    return this._renderList();
  }
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Loading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center', // 交叉轴，
    backgroundColor: '#ccc',
    justifyContent: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginLeft: 20,
  },
});
