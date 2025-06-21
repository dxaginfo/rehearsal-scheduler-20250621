import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Redux
import { checkAuthStatus } from './redux/slices/authSlice';

// Layouts
import MainLayout from './layouts/MainLayout';
import MinimalLayout from './layouts/MinimalLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Calendar from './pages/Calendar';
import BandList from './pages/BandList';
import BandDetail from './pages/BandDetail';
import BandCreate from './pages/BandCreate';
import BandEdit from './pages/BandEdit';
import RehearsalCreate from './pages/RehearsalCreate';
import RehearsalDetail from './pages/RehearsalDetail';
import RehearsalEdit from './pages/RehearsalEdit';
import VenueList from './pages/VenueList';
import VenueCreate from './pages/VenueCreate';
import VenueEdit from './pages/VenueEdit';
import Profile from './pages/Profile';
import SetlistList from './pages/SetlistList';
import SetlistCreate from './pages/SetlistCreate';
import SetlistDetail from './pages/SetlistDetail';
import SetlistEdit from './pages/SetlistEdit';
import NotFound from './pages/NotFound';

// Components
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, user, theme: userTheme } = useSelector((state) => state.auth);

  // Check auth status on app load
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  // Create theme based on user preference
  const theme = createTheme({
    palette: {
      mode: userTheme || 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  // Show loading screen while checking authentication
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Auth Routes */}
            <Route element={<MinimalLayout />}>
              <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
              <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
              <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" /> : <ForgotPassword />} />
              <Route path="/reset-password/:token" element={isAuthenticated ? <Navigate to="/dashboard" /> : <ResetPassword />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                
                {/* Band Routes */}
                <Route path="/bands" element={<BandList />} />
                <Route path="/bands/create" element={<BandCreate />} />
                <Route path="/bands/:bandId" element={<BandDetail />} />
                <Route path="/bands/:bandId/edit" element={<BandEdit />} />
                
                {/* Rehearsal Routes */}
                <Route path="/rehearsals/create" element={<RehearsalCreate />} />
                <Route path="/rehearsals/:rehearsalId" element={<RehearsalDetail />} />
                <Route path="/rehearsals/:rehearsalId/edit" element={<RehearsalEdit />} />
                
                {/* Venue Routes */}
                <Route path="/venues" element={<VenueList />} />
                <Route path="/venues/create" element={<VenueCreate />} />
                <Route path="/venues/:venueId/edit" element={<VenueEdit />} />
                
                {/* Setlist Routes */}
                <Route path="/setlists" element={<SetlistList />} />
                <Route path="/setlists/create" element={<SetlistCreate />} />
                <Route path="/setlists/:setlistId" element={<SetlistDetail />} />
                <Route path="/setlists/:setlistId/edit" element={<SetlistEdit />} />
                
                {/* User Routes */}
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;