
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    paddingBottom: '13%',
    justifyContent: 'center'
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26
  },
  introText: {
    textAlign: 'center',
    fontSize: 18,
    margin: 5
  },
});

export default class Welcome extends React.PureComponent {
  static navigationOptions = {
    title: 'Mastomaton'
  };

  handleGetStarted = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Mastomaton</Text>
        <Text style={styles.introText}>
          Mastomaton lets you explore the fediverse.
          This text kinda sucks but how do you sell this anyway.
        </Text>
        <Button
          onPress={this.handleGetStarted}
          title="Get Started"
        />
      </View>
    );
  }
}
