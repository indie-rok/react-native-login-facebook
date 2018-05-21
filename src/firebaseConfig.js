import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAFe0LUCkNecEp5tZatdykTUM1ZjGsXwcY',
	authDomain: 'react-native-tutorial-e9790.firebaseapp.com',
	databaseURL: 'https://react-native-tutorial-e9790.firebaseio.com',
	projectId: 'react-native-tutorial-e9790',
	storageBucket: 'react-native-tutorial-e9790.appspot.com',
	messagingSenderId: '205479782556'
};
export default firebase.initializeApp(config);
