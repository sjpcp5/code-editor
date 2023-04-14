import { ComponentType, ReactElement } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
// import Loader from 'components/common/loading/Loader';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps): ReactElement => {
  const Component = withAuthenticationRequired(component, { ...args });

  return <Component />;
};

export default ProtectedRoute;
