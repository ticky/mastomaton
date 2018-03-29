import React from 'react';
import { StyleSheet, FlatList, Text, Button, View } from 'react-native';
import TimelineItem from './item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default class Timeline extends React.PureComponent {
  static navigationOptions = {
    title: 'Timeline',
    headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
      />
    ),
  };

  state = {
    data: [
      {key: 0, value: "meow"},
      {key: 1, value: "prr"},
      {key: 2, value: "nya"},
      {key: 3, value: "purr"}
    ]
  };

  handleRefresh = () => {
    const data = this.state.data;

    data.unshift({key: data.length + 1, value: "meow!"});

    this.setState({ data });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{
            flex: 0
          }}
          data={this.state.data}
          onRefresh={this.handleRefresh}
          refreshing={false}
          renderItem={(props) => <TimelineItem {...props} />}
        />
      </View>
    );
  }
}