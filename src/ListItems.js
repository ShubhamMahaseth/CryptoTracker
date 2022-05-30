import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetData from './BottomSheetData';

const ListItems = props => {
  const setColor =
    props.el.market_cap_change_percentage_24h > 0 ? 'green' : 'red';

  const refRBSheet = useRef();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => refRBSheet.current.open()}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={{
              uri: props.el.image,
            }}
          />
          <View style={styles.wrapper}>
            <View style={styles.subWrapper}>
              <Text style={styles.title}>{props.el.name}</Text>
              <Text style={styles.title}>
                {'\u20B9'}
                {props.el.current_price.toFixed(3)}
              </Text>
            </View>
            <View style={styles.subWrapper}>
              <Text style={styles.subTitle}>
                {props.el.symbol.toUpperCase()}
              </Text>
              <Text style={[styles.subTitle, {color: setColor}]}>
                {props.el.market_cap_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        animationType="fade"
        customStyles={{
          wrapper: {
            backgroundColor: '#00000077',
          },
          draggableIcon: {
            backgroundColor: 'black',
          },
          container: {
            elevation: 20,
            borderRadius: 18,
            shadowRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 0,
              height: -4,
            },
          },
        }}>
        <BottomSheetData items={props.el} />
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  title: {color: 'black', fontSize: 20, fontWeight: 'bold'},
  subTitle: {color: 'grey', fontSize: 16},
  container: {
    marginLeft: 18,
    marginTop: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {flex: 1, justifyContent: 'space-between', marginRight: 15},
  image: {height: 40, width: 40},
  subWrapper: {
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default ListItems;
