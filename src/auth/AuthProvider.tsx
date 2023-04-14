// import { PropsWithChildren, ReactPortal } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface IAuthProps {
  domain: string;
  clientId: string;
  authorizationParams: { redirect_uri: string };
  children: JSX.Element;
}

const AuthProvider = ({ ...props }: IAuthProps): JSX.Element => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState): void => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {props?.children}
    </Auth0Provider>
  );
};
export default AuthProvider;
