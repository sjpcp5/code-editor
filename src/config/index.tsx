const auth0domain = (): string => {
  return process.env.REACT_APP_AUTH0_DOMAIN || '';
};
const auth0clientId = (): string => {
  return process.env.REACT_APP_AUTH0_CLIENT_ID || '';
};
export { auth0domain, auth0clientId };
