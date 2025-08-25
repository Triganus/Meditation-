import React, { useState, useCallback } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HomePage from './components/HomePage';
import MeditationTimer from './components/MeditationTimer';
import SoundLibrary from './components/SoundLibrary';
import Profile from './components/Profile/Profile';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Explore from './components/Explore/Explore';
import Notes from './components/Notes/Notes';

const AppContent = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedSound, setSelectedSound] = useState(null);
  const [authModal, setAuthModal] = useState(null);
  const { user, updateUserStats } = useAuth();

  const handleMeditationComplete = useCallback((sessionData) => {
    if (user) {
      updateUserStats(sessionData);
    }
  }, [user, updateUserStats]);

  const renderCurrentView = () => {
    switch(currentView) {
      case 'timer':
        return (
          <MeditationTimer 
            selectedSound={selectedSound} 
            onBack={() => setCurrentView('home')}
            onSessionComplete={handleMeditationComplete}
          />
        );
      case 'sounds':
        return <SoundLibrary onBack={() => setCurrentView('home')} onSelectSound={setSelectedSound} />;
      case 'explore':
        return <Explore onBack={() => setCurrentView('home')} />;
      case 'notes':
        return <Notes onBack={() => setCurrentView('home')} />;
      case 'profile':
        return user ? (
          <Profile onBack={() => setCurrentView('home')} />
        ) : (
          setAuthModal('login')
        );
      default:
        return (
          <HomePage 
            onNavigate={setCurrentView} 
            onAuthClick={setAuthModal}
            user={user}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
      
      {authModal === 'login' && (
        <LoginForm
          onClose={() => setAuthModal(null)}
          onSwitchToRegister={() => setAuthModal('register')}
        />
      )}
      
      {authModal === 'register' && (
        <RegisterForm
          onClose={() => setAuthModal(null)}
          onSwitchToLogin={() => setAuthModal('login')}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
