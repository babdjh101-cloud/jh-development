import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationHistoryContextType {
  smartBack: (fallbackUrl?: string) => void;
  canGoBack: boolean;
  saveListState: (key: string, state: any) => void;
  getListState: (key: string) => any;
}

const NavigationHistoryContext = createContext<NavigationHistoryContextType | undefined>(undefined);

export const NavigationHistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const historyStackRef = useRef<string[]>([]);
  const isInternalNavigationRef = useRef<boolean>(false);

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    const stack = historyStackRef.current;

    // Track internal route changes
    if (stack.length === 0 || stack[stack.length - 1] !== currentPath) {
      stack.push(currentPath);
      // Keep stack reasonable size
      if (stack.length > 50) stack.shift();
    }
    isInternalNavigationRef.current = true;
  }, [location]);

  const canGoBack = historyStackRef.current.length > 1;

  const smartBack = (fallbackUrl: string = '/') => {
    const stack = historyStackRef.current;
    if (stack.length > 1) {
      // Pop the current page from stack
      stack.pop();
      navigate(-1);
    } else {
      // Direct visit or fresh tab: navigate safely within the app, never exit to external domains
      navigate(fallbackUrl, { replace: true });
    }
  };

  const saveListState = (key: string, state: any) => {
    try {
      sessionStorage.setItem(`jhdcl_state_${key}`, JSON.stringify(state));
    } catch (e) {
      // ignore storage errors
    }
  };

  const getListState = (key: string) => {
    try {
      const data = sessionStorage.getItem(`jhdcl_state_${key}`);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  };

  return (
    <NavigationHistoryContext.Provider
      value={{
        smartBack,
        canGoBack,
        saveListState,
        getListState,
      }}
    >
      {children}
    </NavigationHistoryContext.Provider>
  );
};

export const useNavHistory = () => {
  const context = useContext(NavigationHistoryContext);
  if (!context) {
    throw new Error('useNavHistory must be used within NavigationHistoryProvider');
  }
  return context;
};
