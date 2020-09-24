import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import WeatherManagement from './components/WeatherManagement';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store/configureStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                Weather App Demo
              </h1>
            </header>
            <WeatherManagement />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
