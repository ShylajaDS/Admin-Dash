import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import Redux Thunk middleware
import rootReducer from './reducers/rootReducer';
import Header from './components/Header';
import Body from './components/Body';
import Release from './components/Release';
import Footer from './components/Footer';
import SupportForm from './slice/SupportForm'; // Update path as per your project structure
import ExampleComponent from './Example';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "header": {
        "dashboard": "Dashboard",
        "release": "Release",
        "components": "Components",
        "selectLanguage": "Select Language",
        "english": "English",
        "german": "German"
      },
      "body": {
        "overview": "Overview",
        "activeComponents": "Active Components",
        "activeDevices": "Active Devices",
        "statistics": "Statistics",
        "targets": "Targets",
        "recentLogs": "Recent Logs"
      }
    }
  },
  de: {
    translation: {
      "header": {
        "dashboard": "Dashboard",
        "release": "Freigabe",
        "components": "Komponenten",
        "selectLanguage": "Sprache auswählen",
        "english": "Englisch",
        "german": "Deutsch"
      },
      "body": {
        "overview": "Übersicht",
        "activeComponents": "Aktive Komponenten",
        "activeDevices": "Aktive Geräte",
        "statistics": "Statistiken",
        "targets": "Ziele",
        "recentLogs": "Neueste Protokolle"
      }
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const theme = createTheme({
  palette: {
    background: {
      default: 'whitesmoke', 
    },
  },

  typography:{
    fontFamily:{
      default:'Poppins',
    }
  }
});

const store = createStore(rootReducer, applyMiddleware(thunk)); 

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Router>
          <div className='app' style={{ minHeight: '170vh', backgroundColor: 'whitesmoke' }}>
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/release" element={<Release />} />
              <Route path="/support" element={<SupportForm />} />
              <Route path="/about" element={<ExampleComponent/>}/>
            </Routes>
          </div>
        </Router>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;