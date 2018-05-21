import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken } = FBSDK;
import '../firebaseConfig';
import firebase from 'firebase';

class App extends Component {
	constructor() {
		super();
		this.logInFacebook = this.logInFacebook.bind(this);
	}

	logInFacebook() {
		LoginManager.logInWithReadPermissions([
			'public_profile',
			'user_friends'
		]).then(
			result => {
				if (result.isCancelled) {
					alert('Login cancelled');
				} else {
					console.log(result);
					console.log(
						'Login success with permissions3: ' +
							result.grantedPermissions.toString()
					);
					AccessToken.getCurrentAccessToken().then(data => {
						const fbToken = data.accessToken.toString();
						var provider = new firebase.auth.FacebookAuthProvider();
						const credential = provider.credential(null, fbToken);
						firebase
							.auth()
							.signInAndRetrieveDataWithCredential(credential)
							.then(user => {
								console.log(user);
							})
							.catch(error => {
								console.log(error);
							});
					});
				}
			},
			error => {
				alert('Login fail with error: ' + error);
			}
		);
	}

	render() {
		return (
			<View>
				<Button
					title="Press"
					style={{ width: 32, height: 50 }}
					color="#00309c"
					onPress={this.logInFacebook}
				/>
			</View>
		);
	}
}

export default App;
