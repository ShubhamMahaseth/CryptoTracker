import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const BottomSheetData = props => {
  let setColor =
    props.items.market_cap_change_percentage_24h > 0 ? 'green' : 'red';
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${props.items.image}`,
          }}
        />
        <View style={styles.space}>
          <Text style={styles.text}>{props.items.name}</Text>
          <Text style={styles.symbol}>
            ({props.items.symbol.toUpperCase()})
          </Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.textDate}>24hr</Text>
        </View>
      </View>
      <View style={styles.priceSpace}>
        <Text style={styles.priceWrapper}>
          {'\u20B9'} {props.items.current_price.toFixed(3)}
        </Text>
        <View>
          <Text style={[styles.text, {color: setColor}]}>
            {props.items.market_cap_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  image: {height: 30, width: 30},
  text: {
    marginLeft: 7,
    fontSize: 20,
    color: 'black',
    marginRight: 6,
  },
  symbol: {
    fontSize: 20,
    color: 'black',
  },
  textDate: {
    marginRight: 15,
    fontSize: 16,
    color: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  priceWrapper: {
    marginLeft: 54,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  space: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  date: {
    marginRight: 10,
  },

  priceSpace: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: 15,
    marginBottom: 310,
  },
});

export default BottomSheetData;
