import AuthProvider from 'auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/Routes';
import CustomThemeProvider from 'theme/CustomThemeProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CustomThemeProvider>
          <Routes />
        </CustomThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
