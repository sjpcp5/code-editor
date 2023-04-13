import { Suspense } from 'react';
import AuthProvider from 'auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes/Routes';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import Loader from 'components/common/loading/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <Routes />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </Suspense>
  );
}

export default App;
