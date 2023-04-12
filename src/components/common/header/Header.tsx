import { AppBar, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import CodeEditorButton from './CodeEditorButton';
import paths from 'routes/paths';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>Online Monaco IDE</StyledLink>
          {isAuthenticated ? <AuthButtons /> : <UnauthButtons />}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const UnauthButtons = () => {
  return (
    <>
      <SignInButton />
    </>
  );
};

const AuthButtons = () => {
  return (
    <>
      <CodeEditorButton />
      <SignOutButton />
    </>
  );
};
export default Header;
