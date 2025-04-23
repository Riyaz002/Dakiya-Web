import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
import AppRouter from './AppRouter.tsx'
//import useNavigate from 'react-router-dom'
import setNavigator from '../hooks/useAppRouter'
import { Text } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function Layout() {

  //const navigator = useNavigate();
  //setNavigator(navigator);

  return <Stack
      screenOptions={{
        headerTitle: () => <Text style={{ fontWeight: 'bold', fontSize: '150%' }}>MyApp</Text>,
        headerStyle: { backgroundColor: '#F7F7F7' },
      }}>
    </Stack>;
}


