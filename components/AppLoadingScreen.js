import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default class AppLoadingScreen extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Unauthenticated');
    }, 250);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }
}