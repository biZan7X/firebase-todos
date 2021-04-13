import "./styles/App.css";
import Todos from "./Todos";
// ^firebase
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-config";

const App = () => {
	const [user] = useAuthState(auth);

	const signInGoogle = () => {
		auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	const renderComponent = () => {
		if (user) return <Todos user={user} />;
		return (
			<div className="signIn">
				<h1 onClick={signInGoogle} className="signIn-h1">
					Sign In with Google
				</h1>
			</div>
		);
	};
	return <div className="App">{renderComponent()}</div>;
};

export default App;
