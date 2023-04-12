import { PropsWithChildren } from 'react';
import Header from '../header/Header';
import { styled } from '@mui/material/styles';

const LayoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.commonColors.white,
}));

const Page = styled('div')(({ theme }) => ({
  flex: 1,
  height: '100%',
  backgroundColor: theme.commonColors.white,
}));

const Layout = (props: PropsWithChildren) => {
  return (
    <LayoutContainer>
      <Header />
      <Page>{props.children}</Page>
    </LayoutContainer>
  );
};
export default Layout;
