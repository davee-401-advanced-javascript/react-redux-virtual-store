import CssBaseline from '@material-ui/core/CssBaseline';


import Header from './components/header/header.js';
import StoreFront from './components/storefront/storefront.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <StoreFront/>
      <Footer/>
    </>
  );
}

export default App;
