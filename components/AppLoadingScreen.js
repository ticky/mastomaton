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
    // This is the bit that determines logged-in state, oh dear
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