import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {FFlatList} from '../../../components/index';
import {APIS} from '../../../api/index';

class FlatListStudy extends Component {
  static navigationOptions = props => {
    console.log(props);
    const {navigation} = props;
    const {
      state: {params},
    } = navigation;
    return {
      headerTitle: params.headerTitle,
      headerBackTitle: '返回',
    };
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

  render() {
    return (
      <FFlatList
        url={APIS.ServiceInit}
        extraOptions={{type: 1}}
        renderItem={this._renderItem}
      />
    );
  }
}

const ITEM_HEIGHT = 130;
const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
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
});

export default FlatListStudy;
