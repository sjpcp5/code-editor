import { ComponentType } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from 'components/common/loading/Loader';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => (
  <Route
    Component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loader />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
