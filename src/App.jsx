import AppRouter from "./routes/AppRouter";
import { ConfigProvider, message } from "antd";
import { Provider } from "react-redux";
// import {store, persistor} from
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConfigProvider>
					<AppRouter />
				</ConfigProvider>
			</PersistGate>
		</Provider>
	);
}
export default App;
