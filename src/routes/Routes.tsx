// useNavigate is a hook that allows you to navigate to a new route
// from within a component
// use lazy loading to load the component only when the route is
// accessed
import { useRoutes } from 'react-router-dom';
// import { useAuth } from 'auth/AuthProvider';
// import { useAppDispatch } from 'app/hooks';
// import { setCode } from 'features/editor/editorSlice';
// import { setLanguage } from 'features/language/languageSlice';
// import { setTheme } from 'features/theme/themeSlice';
// import { setOutput } from 'features/output/outputSlice';
// import { setFilename } from 'features/filename/filenameSlice';
import paths from './paths';
const Home = () => <h1>Home</h1>;
const Routes = () => {
  let element = useRoutes([
    { path: paths.home, element: <Home /> },
    { path: paths.codeEditor, element: <h1>Editor</h1> },
    { path: paths.login, element: <h1>Login</h1> },
    { path: paths.codeEditorWithId, element: <h1>code editot slice</h1> },
  ]);
  return element;
};

export default Routes;
