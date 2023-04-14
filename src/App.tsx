import { Suspense } from 'react';
import AuthProvider from 'auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from 'routes/Routing';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import Loader from 'components/common/loading/Loader';
import { auth0domain, auth0clientId } from './config/index';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <AuthProvider
          domain={auth0domain()}
          clientId={auth0clientId()}
          authorizationParams={{ redirect_uri: window.location.origin }}
        >
          <CustomThemeProvider>
            <Routing />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </Suspense>
  );
}

export default App;
