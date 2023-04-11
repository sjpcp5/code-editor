import { PropsWithChildren } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { auth0domain, auth0clientId } from '../config/index';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState): void => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={auth0domain()}
      clientId={auth0clientId()}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};
export default AuthProvider;
