import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';
import Header from './components/header/header.js';
import StoreFront from './components/storefront/storefront.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Header />
        <StoreFront />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
