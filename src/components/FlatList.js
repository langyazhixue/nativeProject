import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import FActivityIndicator from './ActivityIndicator';
import {variableStyle} from '../styles/variables';
// import {APIS} from '../../../api/index';
const wWidth = Dimensions.get('window').width;
import http from '../utils/http';
import PropTypes from 'prop-types';

export default class FFlatList extends Component {
  static defaultProps = {
    url: '',
    extraOptions: {},
    renderItem: () => {
      return <View />;
    },
  };
  static propTypes = {
    url: PropTypes.string.isRequired,
    extraOptions: PropTypes.object,
    renderItem: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      list: [],
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
    const {url, extraOptions} = this.props;
    if (!url) {
      return false;
    }
    http
      .get(url, {
        params: {
          ...extraOptions,
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
            list: res.list,
            page: curPage,
            showFoot,
          });
        } else {
          this.setState({
            isLoading: false,
            list: this.state.list.concat(res.list),
            page: curPage,
            showFoot,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  _renderItem = data => {
    return this.props.renderItem(data);
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
    const {isLoading, list} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <FActivityIndicator />
        ) : (
          <FlatList
            style={styles.contentList}
            data={list}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this._renderItemSeparatorComponent}
            ListEmptyComponent={this._renderListEmptyComponent}
            ListFooterComponent={this._renderFooter}
            refreshControl={
              <RefreshControl
                title="loading..."
                refreshing={this.state.isRefresh}
                tintColor={variableStyle.green}
                titleColor={variableStyle.green}
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
    backgroundColor: variableStyle.drakGray,
  },
  separator: {
    height: 5,
    alignSelf: 'stretch',
  },
  footer: {
    flexDirection: 'row',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    color: variableStyle.themeColor,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
});
