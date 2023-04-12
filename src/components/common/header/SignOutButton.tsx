import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SignOutStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const SignOutButton = () => {
  const { logout } = useAuth0();

  const onSignOut = () => {
    logout();
  };

  return <SignOutStyledButton onClick={onSignOut}>Log Out</SignOutStyledButton>;
};
export default SignOutButton;
