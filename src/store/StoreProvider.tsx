import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './index';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/common/loading/Loader';

const StoreProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};
export default StoreProvider;
