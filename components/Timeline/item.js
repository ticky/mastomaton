import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff'
  },
  itemText: {
    fontSize: 18,
  }
});

class TimelineItem extends React.PureComponent {
  handlePress = () => {
    console.log("Going!");
    this.props.navigation.navigate('Details', { item: this.props.item });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handlePress}>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            {this.props.item.value}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default withNavigation(TimelineItem);
