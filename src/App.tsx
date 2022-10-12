import React from 'react';
import './assets/styles/reset.css';
import './assets/styles/common.css';
import styles from './App.module.scss';
import 'antd/dist/antd.css';
import './locales/i18n';
import routes from './router';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Loading from './components/PopUpLoading';
import Head from './components/Header';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Head />
        </Header>
        <Content className={styles.content}>
          <React.Suspense fallback={<Loading />}>
            <Routes>
              {
                routes.map(({ path, Component }, index) => (
                  <Route
                    key={index}
                    path={path}
                    element={<Component />}
                  />
                ))
              }
            </Routes>
          </React.Suspense>
        </Content>
        <Footer className={styles.footer}>Footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
