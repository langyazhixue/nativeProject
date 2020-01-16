import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  Dimensions,
  RefreshControl,
} from 'react-native';

import variableStyle from '../../../styles/variables';
import {APIS, APP} from '../../../api/index';
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
  fetchMessage = curPage => {
    http
      .get(APIS.ServiceInit, {
        params: {
          type: 1,
          page: curPage,
        },
      })
      .then(res => {
        if (curPage === 1) {
          this.setState({
            isLoading: false,
            isRefresh: false,
            messageList: res.list,
            page: curPage,
          });
        } else {
          this.setState({
            isLoading: false,
            messageList: this.state.messageList.concat(res.list),
            page: curPage,
            showFoot: 0,
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
      return (
        <View style={styles.footer}>
          <Text style={styles.footerText}>没有更多数据了</Text>
        </View>
      );
    }
  };
  render() {
    const {isLoading, messageList} = this.state;
    return (
      <View>
        {isLoading ? (
          <ActivityIndicator
            animating={true}
            color={variableStyle.green}
            size="large"
          />
        ) : (
          <FlatList
            style={styles.contentList}
            data={messageList}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={({highlighted}) => (
              <View style={styles.separator} />
            )}
            ListEmptyComponent={this._renderListEmptyComponent}
            ListFooterComponent={this._renderFooter}
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
