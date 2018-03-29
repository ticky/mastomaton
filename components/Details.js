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
          {this.props.navigation.state.params.item.value}
        </Text>
        <Text>
          {this.props.navigation.state.params.item.key}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff'
  },
  itemText: {
    fontSize: 18,
  }
});
