// useNavigate is a hook that allows you to navigate to a new route
// from within a component
// use lazy loading to load the component only when the route is
// accessed
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import { useAuth } from 'auth/AuthProvider';
// import { useAppDispatch } from 'app/hooks';
// import { setCode } from 'features/editor/editorSlice';
// import { setLanguage } from 'features/language/languageSlice';
// import { setTheme } from 'features/theme/themeSlice';
// import { setOutput } from 'features/output/outputSlice';
// import { setFilename } from 'features/filename/filenameSlice';
import ProtectedRoute from '../auth/ProtectedRoute';
import Loader from '../components/common/loading/Loader';

import paths from './paths';
const Home = React.lazy(() => import('pages/home/Home'));
const CodeEditor = React.lazy(() => import('pages/code-editor/CodeEditor'));
const Routing = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.codeEditor} element={<ProtectedRoute component={CodeEditor} />} />
    </Routes>
  );
};

export default Routing;
