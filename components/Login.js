
import React from 'react';
import { StyleSheet, Button, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { AuthSession } from 'expo';

const DEFAULT_INSTANCE = 'awoo.space';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  introText: {
    textAlign: 'center',
    fontSize: 18,
  },
  instanceURL: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff'
  }
});

export default class Login extends React.PureComponent {
  static navigationOptions = {
    title: 'Login'
  };

  state = {
    instance: ''
  };

  handleInstanceChange = (instance) => {
    this.setState({ instance });
  };

  handleInstanceConfirm = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    let result = await AuthSession.startAsync({
      authUrl:
        `https://awoo.space/oauth?response_type=token` +
        `&client_id=sorry-this-is-a-test` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });

    this.setState({ result });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        style={styles.container}
      >
        <Text
          style={styles.introText}
        >
          Enter your instance URL to log into Mastodon or GlitchSoc
        </Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          keyboardType="url"
          returnKeyType="next"
          spellCheck={false}
          style={styles.instanceURL}
          placeholder={DEFAULT_INSTANCE}
          onChangeText={this.handleInstanceChange}
          onSubmitEditing={this.handleInstanceConfirm}
        />
        <Button
          onPress={this.handleInstanceConfirm}
          title="Next"
        />
      </KeyboardAvoidingView>
    );
  }
}
