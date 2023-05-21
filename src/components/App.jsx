import { lazy, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.js';
// import { HomePage } from 'pages/HomePage.js';
// import { LoginPage } from 'pages/LoginPage.js';
// import { RegisterPage } from 'pages/RegisterPage.js';
// import { PhonebookPage } from 'pages/PhonebookPage.js';
import { refreshUser } from 'redux/auth/operations.js';
import { useAuth } from './hooks/useAuth.js';
import { RestrictedRoute } from './RestrictedRoute.js';
import { PrivateRoute } from './PrivateRoute.js';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
