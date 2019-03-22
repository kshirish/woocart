import faker from 'faker';

const Auth = {};

Auth.login = () => ({ isLoggedIn: true });
Auth.logout = () => ({ isLoggedIn: false });

export default Auth;
