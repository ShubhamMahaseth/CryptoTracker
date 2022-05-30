import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import ListItems from './ListItems';
import {getMarketData} from '../services/CryptoService';

const FirstScreen = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(12);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const fetchMarketData = async () => {
    const marketData = await getMarketData(page);
    setData(marketData);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchMarketData().then(() => setRefreshing(false));
  });

  const handleLoadMore = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  useEffect(() => {
    setLoading(true);
    const fetchMarketData = async () => {
      const marketData = await getMarketData(page);
      setData(marketData);
      setLoading(false);
    };
    fetchMarketData();
  }, [page]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Markets</Text>
        </View>
        <View style={styles.horizontal}></View>
        <FlatList
          data={data}
          onEndReached={() => setPage(page + 12)}
          keyExtractor={items => items.id}
          renderItem={el => {
            return <ListItems el={el.item} />;
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={handleLoadMore}
          onEndReachedThreshold={1}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapper: {
    marginTop: 12,
    marginLeft: 25,
    marginBottom: 15,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  horizontal: {
    height: 1.1,
    backgroundColor: '#A9ABB1',
  },
  loader: {
    marginBottom: 10,
    alignItems: 'center',
  },
});

export default FirstScreen;
