import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>{`GuitarLA - ${page}`}</title>
        <meta name='description' content='Website for selling guitars online' />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  page: PropTypes.string,
};

Layout.defaultProps = {
  page: 'Inicio',
};

export default Layout;
