import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      {/* <ErrorBoundary> */}
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default Layout;
