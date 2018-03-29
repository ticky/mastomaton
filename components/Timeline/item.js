import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff'
  },
  itemText: {
    fontSize: 18,
  }
});

export default class TimelineItem extends React.PureComponent {
  handlePress = () => {
    console.log("Going!");
    this.props.navigation.navigate('Details')
  }

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
