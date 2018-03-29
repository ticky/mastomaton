import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Details extends React.PureComponent {
  render() {
    return (
      <View
        onPress={this.handlePress}
        style={styles.item}
      >
        <Text style={styles.itemText}>
          {this.props.item.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    height: 44,
    backgroundColor: '#fff'
  },
  itemText: {
    fontSize: 18,
  }
});
