'use client';

import React, { useState, useEffect } from 'react';
import { RotateCcw, Settings, Menu, X, Sun, Moon, Download, Image, Heart, Share, Volume2, VolumeX, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface NaamJaapCoreProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const NaamJaapCore: React.FC<NaamJaapCoreProps> = ({ 
  showMenu, 
  setShowMenu, 
  currentPage, 
  setCurrentPage 
}) => {
  // Separate counts for each deity
  const [deityCounts, setDeityCounts] = useState<Record<string, { count: number; totalCount: number; malas: number; dailyCount: number; lastActive: string }>>({});
  const [selectedDeity, setSelectedDeity] = useState('Ram');
  const [targetMalas, setTargetMalas] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioVoice, setAudioVoice] = useState<'male' | 'female'>('male');
  const [language, setLanguage] = useState<'hindi' | 'english'>('english');
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize with system preference if available
    if (typeof window !== 'undefined') {
      const savedData = JSON.parse(localStorage.getItem('naamJaapData') || '{}');
      if (savedData.darkMode !== undefined) {
        return savedData.darkMode;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [showPWAPrompt, setShowPWAPrompt] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [heartAnimations, setHeartAnimations] = useState<{ id: number; x: number; y: number; deity: string }[]>([]);
  const [showAboutAccordion, setShowAboutAccordion] = useState(false);

  const deities = [
    { 
      name: 'Ram', 
      mantra: { 
        hindi: 'श्री राम जय राम जय जय राम', 
        english: 'Shri Ram Jai Ram Jai Jai Ram' 
      }, 
      color: 'bg-orange-500',
      darkColor: 'bg-orange-600'
    },
    { 
      name: 'Krishna', 
      mantra: { 
        hindi: 'हरे कृष्ण हरे कृष्ण', 
        english: 'Hare Krishna Hare Krishna' 
      }, 
      color: 'bg-blue-500',
      darkColor: 'bg-blue-600'
    },
    { 
      name: 'Radhe', 
      mantra: { 
        hindi: 'राधे राधे', 
        english: 'Radhe Radhe' 
      }, 
      color: 'bg-pink-500',
      darkColor: 'bg-pink-600'
    },
    { 
      name: 'Vitthal', 
      mantra: { 
        hindi: 'विट्ठल विट्ठल', 
        english: 'Vitthal Vitthal' 
      }, 
      color: 'bg-yellow-500',
      darkColor: 'bg-yellow-600'
    },
    { 
      name: 'Samb Sadashiv', 
      mantra: { 
        hindi: 'शम्भो शंकर नमः शिवाय', 
        english: 'Shambo Shankar Namah Shivaya' 
      }, 
      color: 'bg-purple-500',
      darkColor: 'bg-purple-600'
    },
    { 
      name: 'Waheguru', 
      mantra: { 
        hindi: 'वाहे गुरु वाहे गुरु', 
        english: 'Waheguru Waheguru' 
      }, 
      color: 'bg-teal-500',
      darkColor: 'bg-teal-600'
    }
  ];

  const currentDeity = deities.find(d => d.name === selectedDeity)!;

  // Translation object
  const translations = {
    hindi: {
      title: 'Daily Naam Jap',
      subtitle: 'आध्यात्मिक साधना का साथी',
      selectDeity: 'देवता चुनें',
      chantMantra: 'मंत्र जप करें',
      currentMala: 'वर्तमान माला में जप',
      completedMalas: 'पूर्ण माला',
      totalChants: 'कुल जप',
      dailyTarget: 'दैनिक लक्ष्य',
      chant: 'जप करें',
      touch: 'स्पर्श करें',
      settings: 'सेटिंग्स',
      dailyMalaTarget: 'दैनिक माला लक्ष्य',
      vibration: 'स्पंदन',
      resetAllData: 'सभी डेटा रीसेट करें',
      footer: '🙏 ॐ शांति शांति शांति 🙏',
      footerSubtext: 'आपकी आध्यात्मिक यात्रा में सहायक',
      language: 'भाषा',
      darkMode: 'डार्क मोड',
      menu: 'मेन्यू',
      about: 'ऐप के बारे में',
      faq: 'सामान्य प्रश्न',
      benefits: 'नाम जप के फायदे',
      contact: 'संपर्क करें',
      privacyPolicy: 'गोपनीयता नीति',
      termsConditions: 'नियम और शर्तें',
      shareApp: 'ऐप साझा करें',
      audio: 'ऑडियो',
      dailyProgress: 'दैनिक प्रगति',
      lifetimeProgress: 'जीवनकाल प्रगति',
      installApp: 'ऐप इंस्टॉल करें',
      pwaPromptTitle: 'ऐप को होम स्क्रीन पर जोड़ें',
      pwaPromptText: 'बेहतर अनुभव के लिए इस ऐप को अपनी होम स्क्रीन पर इंस्टॉल करें।'
    },
    english: {
      title: 'Daily Naam Jap',
      subtitle: 'Your Spiritual Practice Companion',
      selectDeity: 'Select Deity',
      chantMantra: 'Chant Mantra',
      currentMala: 'Chants in Current Mala',
      completedMalas: 'Completed Malas',
      totalChants: 'Total Chants',
      dailyTarget: 'Daily Target',
      chant: 'Chant',
      touch: 'Tap Here',
      settings: 'Settings',
      dailyMalaTarget: 'Daily Mala Target',
      vibration: 'Vibration',
      resetAllData: 'Reset All Data',
      footer: '🙏 Om Shanti Shanti Shanti 🙏',
      footerSubtext: 'Supporting Your Spiritual Journey',
      language: 'Language',
      darkMode: 'Dark Mode',
      menu: 'Menu',
      about: 'About App',
      faq: 'FAQ',
      benefits: 'Benefits of Naam Jaap',
      contact: 'Contact Us',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      shareApp: 'Share App',
      audio: 'Audio',
      dailyProgress: 'Daily Progress',
      lifetimeProgress: 'Lifetime Progress',
      installApp: 'Install App',
      pwaPromptTitle: 'Add to Home Screen',
      pwaPromptText: 'Install this app on your home screen for a better experience.'
    }
  };

  const t = translations[language];

  // Helper function to convert deity name to URL slug
  const getDeitySlug = (deityName: string) => {
    const slugMap: Record<string, string> = {
      'Ram': 'ram',
      'Krishna': 'krishna',
      'Radhe': 'radhe',
      'Vitthal': 'vitthal',
      'Samb Sadashiv': 'samb-sadashiv',
      'Waheguru': 'waheguru'
    };
    return slugMap[deityName] || deityName.toLowerCase();
  };

  // Check for first visit and PWA capability
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setIsFirstVisit(true);
      setShowPWAPrompt(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }

    // Check if app is PWA capable
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setShowPWAPrompt(false);
    }

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  // Initialize deity counts helper
  const initializeDeityCount = (deityName: string) => {
    const today = new Date().toDateString();
    return {
      count: 0,
      totalCount: 0,
      malas: 0,
      dailyCount: 0,
      lastActive: today
    };
  };

  // Get current deity data
  const getCurrentDeityData = () => {
    return deityCounts[selectedDeity] || initializeDeityCount(selectedDeity);
  };

  // Load saved data on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('naamJaapData') || '{}');
    if (savedData.deityCounts) setDeityCounts(savedData.deityCounts);
    
    // Set dark mode based on saved preference or system preference
    if (savedData.darkMode !== undefined) {
      setDarkMode(savedData.darkMode);
    } else {
      // Check system preference
      const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemDarkMode);
    }
    
    if (savedData.language) setLanguage(savedData.language);
    if (savedData.audioEnabled !== undefined) setAudioEnabled(savedData.audioEnabled);
    if (savedData.audioVoice) setAudioVoice(savedData.audioVoice);

    // Listen for system theme changes only if no saved preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update if no saved preference exists
      const currentSavedData = JSON.parse(localStorage.getItem('naamJaapData') || '{}');
      if (currentSavedData.darkMode === undefined) {
        setDarkMode(e.matches);
      }
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemThemeChange);
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleSystemThemeChange);
      }
    };
  }, []);

  // Save data whenever values change
  useEffect(() => {
    localStorage.setItem('naamJaapData', JSON.stringify({ 
      deityCounts,
      darkMode, 
      language,
      audioEnabled,
      audioVoice
    }));
  }, [deityCounts, darkMode, language, audioEnabled, audioVoice]);

  // Apply dark mode class to document and update theme color
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Update theme color for mobile browsers
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#1f2937'); // gray-800
      }
    } else {
      document.documentElement.classList.remove('dark');
      // Update theme color for mobile browsers
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#f97316'); // orange-500
      }
    }
  }, [darkMode]);

  // Reset daily counts at midnight
  useEffect(() => {
    const checkDailyReset = () => {
      const today = new Date().toDateString();
      const updatedCounts = { ...deityCounts };
      let hasUpdates = false;
      
      Object.keys(updatedCounts).forEach(deity => {
        if (updatedCounts[deity].lastActive !== today) {
          updatedCounts[deity].dailyCount = 0;
          updatedCounts[deity].lastActive = today;
          hasUpdates = true;
        }
      });
      
      if (hasUpdates) {
        setDeityCounts(updatedCounts);
      }
    };
    
    checkDailyReset();
    const interval = setInterval(checkDailyReset, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [deityCounts]);

  const handleJaap = (event?: React.MouseEvent) => {
    const currentData = getCurrentDeityData();
    const newCount = currentData.count + 1;
    const newTotalCount = currentData.totalCount + 1;
    const newDailyCount = currentData.dailyCount + 1;
    const today = new Date().toDateString();
    
    // Create heart animation
    if (event) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const heartId = Date.now();
      const x = rect.width / 2 + (Math.random() - 0.5) * 40; // Center with slight variation
      const y = rect.height / 2 + (Math.random() - 0.5) * 40;
      
      setHeartAnimations(prev => [...prev, { id: heartId, x, y, deity: selectedDeity }]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHeartAnimations(prev => prev.filter(h => h.id !== heartId));
      }, 2000);
    }
    
    let newMalas = currentData.malas;
    let resetCount = newCount;
    
    // Complete mala (108 counts)
    if (newCount === 108) {
      newMalas = currentData.malas + 1;
      resetCount = 0;
      
      // Vibration feedback for mala completion
      if (vibrationEnabled && navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }
    } else if (vibrationEnabled && navigator.vibrate) {
      // Light vibration for each count
      navigator.vibrate(50);
    }
    
    // Play audio if enabled
    if (audioEnabled) {
      playMantraAudio();
    }
    
    // Update deity counts
    setDeityCounts(prev => ({
      ...prev,
      [selectedDeity]: {
        count: resetCount,
        totalCount: newTotalCount,
        malas: newMalas,
        dailyCount: newDailyCount,
        lastActive: today
      }
    }));
  };

  const playMantraAudio = () => {
    // Create simple beep sound for now - can be replaced with actual mantra audio
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(audioVoice === 'male' ? 200 : 400, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const resetCurrent = () => {
    const currentData = getCurrentDeityData();
    setDeityCounts(prev => ({
      ...prev,
      [selectedDeity]: {
        ...currentData,
        count: 0
      }
    }));
  };

  const resetAll = () => {
    setDeityCounts({});
    localStorage.removeItem('naamJaapData');
  };

  const handleDeityChange = (deityName: string) => {
    setSelectedDeity(deityName);
    // Initialize deity data if not exists
    if (!deityCounts[deityName]) {
      setDeityCounts(prev => ({
        ...prev,
        [deityName]: initializeDeityCount(deityName)
      }));
    }
  };

  const shareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Naam Jap - Spiritual Chanting Counter',
          text: 'Track your spiritual chanting practice with this free Daily Naam Jap counter app!',
          url: window.location.origin
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.origin);
      alert('App link copied to clipboard!');
    }
  };

  const currentData = getCurrentDeityData();
  const progress = (currentData.count / 108) * 100;
  const lifetimeStats = Object.values(deityCounts).reduce((acc, data) => ({
    totalChants: acc.totalChants + data.totalCount,
    totalMalas: acc.totalMalas + data.malas,
    dailyChants: acc.dailyChants + data.dailyCount
  }), { totalChants: 0, totalMalas: 0, dailyChants: 0 });

  const themeClasses = darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-orange-50 to-yellow-50';
  const cardClasses = darkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-800 border border-gray-200';
  const textClasses = darkMode ? 'text-white' : 'text-gray-800';

  // PWA Install Handler
  const handleInstallPWA = () => {
    setShowPWAPrompt(false);
    // This would trigger the browser's install prompt in a real PWA
    alert(language === 'hindi' ? 
      'अपने ब्राउज़र मेन्यू से "होम स्क्रीन पर जोड़ें" का विकल्प चुनें।' : 
      'Please use your browser menu to "Add to Home Screen".'
    );
  };

  // Navigation Components
  const NavigationMenu = () => (
    <div className={`fixed top-0 left-0 h-full w-64 ${cardClasses} shadow-xl transform transition-transform z-50 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className={`text-xl font-bold ${textClasses}`}>{t.menu}</h2>
          <button onClick={() => setShowMenu(false)}>
            <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </button>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-3">
          <li>
            <button 
              onClick={() => { setCurrentPage('main'); setShowMenu(false); }}
              className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses}`}
            >
              🏠 {language === 'hindi' ? 'मुख्य पृष्ठ' : 'Home'}
            </button>
          </li>
          <li>
            <Link href="/about" className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses} block`}>
              {t.about}
            </Link>
          </li>
          <li>
            <Link href="/benefits" className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses} block`}>
              {t.benefits}
            </Link>
          </li>
          <li>
            <Link href="/faq" className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses} block`}>
              {t.faq}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses} block`}>
              {t.contact}
            </Link>
          </li>
          <li>
            <button 
              onClick={() => { setShowSettings(!showSettings); setShowMenu(false); }}
              className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses}`}
            >
              <Settings className="w-4 h-4 inline mr-2" />{t.settings}
            </button>
          </li>
          <li>
            <Link href="/privacy-policy" className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses} block`}>
              {t.privacyPolicy}
            </Link>
          </li>
          <li>
            <Link href="/terms-conditions" className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses} block`}>
              {t.termsConditions}
            </Link>
          </li>
          <li>
            <button 
              onClick={() => { shareApp(); setShowMenu(false); }}
              className={`w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 ${textClasses}`}
            >
              <Share className="w-4 h-4 inline mr-2" />{t.shareApp}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      <div className="max-w-md lg:max-w-2xl mx-auto relative">
        
        {/* Header - Compact */}
        <div className={`flex items-center justify-between p-4 sticky top-0 z-40 backdrop-blur-md ${darkMode ? 'bg-gray-900 bg-opacity-95' : 'bg-white bg-opacity-90'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button 
            onClick={() => setShowMenu(true)}
            className={`p-2 rounded-lg ${cardClasses} shadow-md hover:scale-105 transition-transform`}
          >
            <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
          </button>
          
          <Link href="/" className="text-center">
            {/* Daily Naam Jap Logo */}
            <img 
              src="/dailynaamjap-logo.svg" 
              alt="Daily Naam Jap Logo" 
              className="h-12 w-auto mx-auto cursor-pointer hover:scale-105 transition-transform"
              style={{
                filter: darkMode ? 'invert(1) hue-rotate(180deg) brightness(1.2)' : 'none'
              }}
            />
          </Link>
          
          <div className="flex gap-1">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${cardClasses} shadow-md hover:scale-105 transition-transform`}
            >
              {darkMode ? <Sun className={`w-4 h-4 ${darkMode ? 'text-yellow-400' : 'text-gray-600'}`} /> : <Moon className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-gray-600'}`} />}
            </button>
            <button 
              onClick={() => setLanguage(language === 'hindi' ? 'english' : 'hindi')}
              className={`p-2 rounded-lg ${cardClasses} shadow-md text-xs font-bold hover:scale-105 transition-transform ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {language === 'hindi' ? 'EN' : 'हि'}
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-4 pb-20">
          {/* Universal Layout (works on all screen sizes) */}
          <div>
            {/* Deity Selection */}
            <div className={`${cardClasses} rounded-xl shadow-lg p-4 mb-4`}>
                <h3 className="text-lg font-semibold mb-3 text-center">{t.selectDeity}</h3>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {deities.map((deity) => (
                    <button
                      key={deity.name}
                      onClick={() => handleDeityChange(deity.name)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all text-sm whitespace-nowrap ${
                        selectedDeity === deity.name
                          ? `${darkMode ? deity.darkColor : deity.color} text-white shadow-md scale-105`
                          : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105`
                      }`}
                    >
                      {deity.name}
                    </button>
                  ))}
                </div>
              </div>

            {/* Mantra Display */}
            <div className={`${darkMode ? currentDeity.darkColor : currentDeity.color} rounded-xl shadow-lg p-4 mb-4 text-white text-center`}>
              <div className="text-lg font-bold mb-1">{currentDeity.mantra[language]}</div>
              <div className="text-xs opacity-90">{t.chantMantra}</div>
            </div>

            {/* Count Display - Compact */}
            <div className={`${cardClasses} rounded-xl shadow-lg p-4 mb-4`}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">{currentData.count}</div>
                <div className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t.currentMala}</div>
                
                {/* Compact Progress Ring */}
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-200 dark:text-gray-700"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 35}`}
                      strokeDashoffset={`${2 * Math.PI * 35 * (1 - progress / 100)}`}
                      className={`${darkMode ? currentDeity.darkColor.replace('bg-', 'text-') : currentDeity.color.replace('bg-', 'text-')} transition-all duration-300`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Compact */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className={`${cardClasses} rounded-xl shadow-lg p-3 text-center`}>
                <div className="text-xl font-bold text-green-600">{currentData.malas}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t.completedMalas}</div>
              </div>
              <div className={`${cardClasses} rounded-xl shadow-lg p-3 text-center`}>
                <div className="text-xl font-bold text-blue-600">{currentData.totalCount}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t.totalChants}</div>
              </div>
            </div>

            {/* Main Action Button - Optimized for mobile */}
            <div className="text-center mb-4 relative">
              <button
                onClick={handleJaap}
                className={`w-40 h-40 rounded-full ${darkMode ? currentDeity.darkColor : currentDeity.color} text-white shadow-2xl transform transition-all duration-150 active:scale-95 hover:shadow-xl relative overflow-hidden`}
              >
                <div className="text-xl font-bold">{t.chant}</div>
                <div className="text-sm mt-1 opacity-90">{t.touch}</div>
                
                {/* Heart animations */}
                {heartAnimations.map(heart => (
                  <div
                    key={heart.id}
                    className="absolute flex items-center gap-1 pointer-events-none"
                    style={{
                      left: heart.x,
                      top: heart.y,
                      animation: 'flyUp 2s ease-out forwards',
                      '--start-x': `${heart.x}px`,
                      '--start-y': `${heart.y}px`,
                    } as React.CSSProperties}
                  >
                    <Heart 
                      className="w-6 h-6 text-red-500"
                      fill="currentColor"
                    />
                    <span className="text-sm font-bold text-red-500 whitespace-nowrap">
                      {heart.deity}
                    </span>
                  </div>
                ))}
              </button>
            </div>

            {/* Control Buttons - Compact */}
            <div className="flex justify-center gap-3 mb-4">
              <button
                onClick={resetCurrent}
                className="p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-3 rounded-full bg-gray-500 hover:bg-gray-600 text-white shadow-lg transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* About Naam Jaap Accordion - SEO Friendly */}
            <div className={`${cardClasses} rounded-xl shadow-lg mb-4 overflow-hidden`}>
                <button
                  onClick={() => setShowAboutAccordion(!showAboutAccordion)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className={`text-lg font-semibold ${textClasses}`}>
                    {language === 'hindi' ? 'Daily Naam Jap के बारे में' : 'About Daily Naam Jap'}
                  </h3>
                  {showAboutAccordion ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {showAboutAccordion && (
                  <div className="px-4 pb-4">
                    <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
                      {language === 'hindi' ? (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-base">नाम जप क्या है?</h4>
                          <p className="text-sm">
                            नाम जप एक पवित्र आध्यात्मिक अभ्यास है जिसमें भगवान के नाम का निरंतर स्मरण और जप किया जाता है। 
                            यह हिंदू, सिख और अन्य भारतीय धर्मों में एक मुख्य साधना है जो मन को शुद्ध करती है और 
                            आत्मा को परमात्मा से जोड़ती है।
                          </p>
                          
                          <h4 className="font-semibold text-base">नाम जप के फायदे</h4>
                          <ul className="text-sm space-y-2">
                            <li>• <strong>मानसिक शांति:</strong> तनाव और चिंता को कम करता है</li>
                            <li>• <strong>एकाग्रता:</strong> मन की एकाग्रता और फोकस बढ़ाता है</li>
                            <li>• <strong>आध्यात्मिक विकास:</strong> आत्मा का उत्थान और शुद्धीकरण</li>
                            <li>• <strong>सकारात्मकता:</strong> जीवन में सकारात्मक ऊर्जा लाता है</li>
                            <li>• <strong>स्वास्थ्य सुधार:</strong> रक्तचाप कम करता है और दिल के लिए अच्छा है</li>
                          </ul>
                          
                          <h4 className="font-semibold text-base">कैसे करें नाम जप?</h4>
                          <ol className="text-sm space-y-2">
                            <li>1. <strong>शुद्ध मन:</strong> शांत और एकाग्र मन से शुरुआत करें</li>
                            <li>2. <strong>नियमित अभ्यास:</strong> प्रतिदिन निश्चित समय पर जप करें</li>
                            <li>3. <strong>माला का प्रयोग:</strong> 108 मनकों वाली माला का उपयोग करें</li>
                            <li>4. <strong>श्रद्धा भाव:</strong> पूर्ण श्रद्धा और भक्ति के साथ जप करें</li>
                          </ol>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-base">What is Naam Jaap?</h4>
                          <p className="text-sm">
                            Naam Jaap (Divine Name Chanting) is a sacred spiritual practice involving the continuous 
                            repetition and remembrance of God's name. It is a core practice in Hinduism, Sikhism, 
                            and other Indian spiritual traditions that purifies the mind and connects the soul 
                            with the Divine.
                          </p>
                          
                          <h4 className="font-semibold text-base">Benefits of Naam Jaap</h4>
                          <ul className="text-sm space-y-2">
                            <li>• <strong>Mental Peace:</strong> Reduces stress, anxiety, and mental restlessness</li>
                            <li>• <strong>Enhanced Focus:</strong> Improves concentration and mindfulness</li>
                            <li>• <strong>Spiritual Growth:</strong> Elevates consciousness and purifies the soul</li>
                            <li>• <strong>Positive Energy:</strong> Attracts divine blessings and positive vibrations</li>
                            <li>• <strong>Health Benefits:</strong> Lowers blood pressure and promotes heart health</li>
                            <li>• <strong>Emotional Stability:</strong> Brings emotional balance and inner strength</li>
                            <li>• <strong>Karmic Purification:</strong> Helps dissolve negative karma and past impressions</li>
                          </ul>
                          
                          <h4 className="font-semibold text-base">How to Practice Naam Jaap?</h4>
                          <ol className="text-sm space-y-2">
                            <li>1. <strong>Pure Intention:</strong> Begin with a sincere and devoted heart</li>
                            <li>2. <strong>Regular Practice:</strong> Maintain consistent daily practice</li>
                            <li>3. <strong>Use of Mala:</strong> Use a 108-bead mala for counting</li>
                            <li>4. <strong>Mindful Chanting:</strong> Focus completely on the divine name</li>
                            <li>5. <strong>Breath Coordination:</strong> Synchronize chanting with natural breathing</li>
                            <li>6. <strong>Sacred Space:</strong> Choose a quiet, clean place for practice</li>
                          </ol>
                          
                          <h4 className="font-semibold text-base">Scientific Benefits</h4>
                          <p className="text-sm">
                            Modern research shows that repetitive chanting activates the parasympathetic nervous system, 
                            reduces cortisol levels, increases alpha brain waves associated with relaxation, and promotes 
                            the release of endorphins. This leads to improved mental health, better immune function, 
                            and overall well-being.
                          </p>
                          
                          <h4 className="font-semibold text-base">Digital Mala Counter</h4>
                          <p className="text-sm">
                            Our app serves as your digital mala, helping you track your spiritual practice with 
                            precision. Each deity has separate counters, progress tracking, and statistics to 
                            support your spiritual journey. You can practice anywhere, anytime with this 
                            convenient digital companion.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Settings Panel - Mobile */}
              {showSettings && (
                <div className={`${cardClasses} rounded-xl shadow-lg p-4 mb-4`}>
                  <h3 className={`text-lg font-semibold mb-3 ${textClasses}`}>{t.settings}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${textClasses}`}>
                        {t.dailyMalaTarget}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="108"
                        value={targetMalas}
                        onChange={(e) => setTargetMalas(parseInt(e.target.value) || 1)}
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className={`text-sm font-medium ${textClasses}`}>
                        {t.vibration}
                      </label>
                      <button
                        onClick={() => setVibrationEnabled(!vibrationEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          vibrationEnabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            vibrationEnabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className={`text-sm font-medium ${textClasses}`}>
                        {t.audio}
                      </label>
                      <button
                        onClick={() => setAudioEnabled(!audioEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          audioEnabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        {audioEnabled ? <Volume2 className="w-4 h-4 text-white ml-1" /> : <VolumeX className="w-4 h-4 text-gray-500 ml-1" />}
                      </button>
                    </div>
                    
                    {audioEnabled && (
                      <div>
                        <label className={`block text-sm font-medium mb-1 ${textClasses}`}>
                          Voice Type
                        </label>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setAudioVoice('male')}
                            className={`flex-1 p-2 rounded-lg text-sm font-medium transition-colors ${
                              audioVoice === 'male'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            Male
                          </button>
                          <button
                            onClick={() => setAudioVoice('female')}
                            className={`flex-1 p-2 rounded-lg text-sm font-medium transition-colors ${
                              audioVoice === 'female'
                                ? 'bg-pink-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            Female
                          </button>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <h4 className="text-sm font-semibold mb-2">{t.dailyProgress}</h4>
                      <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Today: {currentData.dailyCount} chants | Lifetime: {lifetimeStats.totalChants} chants
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Total Malas: {lifetimeStats.totalMalas}
                      </div>
                    </div>
                    
                    <button
                      onClick={resetAll}
                      className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                    >
                      {t.resetAllData}
                    </button>
                  </div>
                </div>
              )}
          </div>


        </div>
        {/* Navigation Menu */}
        <NavigationMenu />

        {/* PWA Install Prompt */}
        {showPWAPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${cardClasses} rounded-xl p-6 max-w-sm w-full`}>
              <h3 className="text-lg font-bold mb-2">{t.pwaPromptTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.pwaPromptText}</p>
              <div className="flex gap-3">
                <button
                  onClick={handleInstallPWA}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {t.installApp}
                </button>
                <button
                  onClick={() => setShowPWAPrompt(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  {language === 'hindi' ? 'बाद में' : 'Later'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Menu Overlay */}
        {showMenu && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowMenu(false)}
          />
        )}

        {/* Bottom Sticky Ad Placeholder - Responsive */}
        <div className="fixed bottom-0 left-0 right-0 z-30 lg:relative lg:mt-8">
          <div className={`${cardClasses} shadow-lg border-t border-gray-200 dark:border-gray-700 p-3 text-center lg:max-w-2xl lg:mx-auto lg:rounded-xl lg:border`}>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              {language === 'hindi' ? 'विज्ञापन' : 'Advertisement'}
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-gray-400">
              <div className="text-sm lg:hidden">
                {language === 'hindi' ? 
                  '320x50 विज्ञापन स्थान - मोबाइल बैनर' : 
                  '320x50 Ad Space - Mobile Banner'
                }
              </div>
              <div className="text-sm hidden lg:block">
                {language === 'hindi' ? 
                  '728x90 विज्ञापन स्थान - डेस्कटॉप लीडरबोर्ड' : 
                  '728x90 Ad Space - Desktop Leaderboard'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaamJaapCore;