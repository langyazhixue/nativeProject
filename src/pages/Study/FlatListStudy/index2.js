import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  Dimensions,
  RefreshControl,
} from 'react-native';
import {FActivityIndicator} from '../../../components/index';
// import variableStyle from '../../../styles/variables';
import {APIS} from '../../../api/index';
import http from '../../../utils/http';

const wWidth = Dimensions.get('window').width;
class FlatListStudy extends Component {
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      state: {params},
    } = navigation;
    return {
      headerTitle: params.headerTitle,
      headerBackTitle: '返回列',
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      messageList: [],
      isRefresh: false,
      page: 1,
      showFoot: 0, // 控制foot, 0: 隐藏 footer 1: 已经加载完成，没有更多数据， 2: 显示加载中
    };
  }

  componentDidMount() {
    const {page} = this.props;
    this.fetchMessage(page);
  }

  fetchMessage = curPage => {
    http
      .get(APIS.ServiceInit, {
        params: {
          type: 1,
          page: curPage,
        },
      })
      .then(res => {
        console.log(res);
        let showFoot = 0;
        if (res.list.length === 0) {
          showFoot = 1;
        }
        if (curPage === 1) {
          // 分页 1 的时候， showFoot === 0
          this.setState({
            isLoading: false,
            isRefresh: false,
            messageList: res.list,
            page: curPage,
            showFoot,
          });
        } else {
          this.setState({
            isLoading: false,
            messageList: this.state.messageList.concat(res.list),
            page: curPage,
            showFoot,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  _renderItem = ({item, index, separators}) => {
    return (
      <TouchableHighlight style={styles.itemContent}>
        <View>
          <View style={styles.pNameContent}>
            <ImageBackground
              style={styles.pImage}
              source={{uri: item.logo_url}}
            />
            <Text style={styles.pName} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <Text style={styles.pSalary}>
              {`|${item.single_word}\n | ${item.tag} | \n | ${
                item.download_times_fixed
              }`}
            </Text>
          </View>
          <View style={styles.pLine} />
          <Text style={styles.pHr}>{`${item.single_word}`}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  _keyExtractor = (item, index) => {
    return `default_${item.name}_${index}`;
  };
  _renderListEmptyComponent = () => {
    return (
      <View style={styles.emptyContent}>
        <Text style={{fontSize: 16}}>暂无数据,下拉刷新</Text>
      </View>
    );
  };
  // 上拉展示Footer
  _renderFooter = () => {
    const {showFoot} = this.state;
    if (showFoot === 1) {
      // 已经没数据了
      return (
        <View style={styles.footer}>
          <Text style={styles.footerText}>没有更多数据了</Text>
        </View>
      );
    } else if (showFoot === 2) {
      // 正在加载中
      return (
        <View style={styles.footer}>
          <FActivityIndicator />
          <Text style={styles.footerText}>加载中...</Text>
        </View>
      );
    } else if (showFoot === 0) {
      return <View style={styles.footer} />;
    }
  };
  // 下拉刷新，是刷新第一条数据
  _onRefreshData = () => {
    this.setState({
      isRefresh: true,
    });
    this.fetchMessage(1);
  };

  // 上拉加载分页
  _onEndReached = () => {
    const {showFoot, page} = this.state;
    // 用showFoot来控制
    if (showFoot !== 0) {
      return;
    }
    this.setState({
      showFoot: 2,
    });

    this.fetchMessage(page + 1);
  };
  _renderItemSeparatorComponent = ({highlighted, leadingItem}) => {
    // console.log(item);
    return <View style={styles.separator} />;
  };
  render() {
    const {isLoading, messageList} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <FActivityIndicator />
        ) : (
          <FlatList
            style={styles.contentList}
            data={messageList}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._renderItemSeparatorComponent}
            ListEmptyComponent={this._renderListEmptyComponent}
            ListFooterComponent={this._renderFooter}
            refreshControl={
              <RefreshControl
                title="loading..."
                refreshing={this.state.isRefresh}
                tintColor="red"
                titleColor="red"
                onRefresh={() => {
                  this._onRefreshData();
                }}
              />
            }
            onEndReached={this._onEndReached}
            onEndReachedThreshold={0.1}
          />
        )}
      </View>
    );
  }
}

const ITEM_HEIGHT = 130;
const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContent: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentList: {
    width: wWidth,
    flex: 1,
    backgroundColor: 'rgb(241,242,246)',
  },
  separator: {
    height: 5,
    alignSelf: 'stretch',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pImage: {
    width: 40,
    height: 40,
  },
  pNameContent: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pName: {
    fontSize: 12,
    width: 100,
  },
  pSalary: {
    textAlignVertical: 'center',
    fontSize: 16,
    color: 'grey',
  },
  pLine: {
    marginTop: 10,
    height: SEPERATOR_HEIGHT,
    backgroundColor: '#e0e0e0',
  },
  pHr: {
    marginTop: 10,
    height: 20,
    fontSize: 12,
    color: 'rgb(29,216,200)',
  },
  footer: {
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    color: '#999999',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default FlatListStudy;
