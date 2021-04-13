import "./styles/App.css";
import Todos from "./Todos";

const App = () => {
	const user = true;

	const renderComponent = () => {
		if (user) return <Todos />;
		return <h1>Sign In with Google</h1>;
	};
	return <div className="App">{renderComponent()}</div>;
};

export default App;
