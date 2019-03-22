import createReactContext from 'create-react-context';

const defaultContext = {
  isNightMode: false,
  isFullscreen: false,
  isFullscreenLocal: false,
  layoutType: 'grid'
};
const AppContext = createReactContext(defaultContext);

export default AppContext;
