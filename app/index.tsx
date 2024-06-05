import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from '../src/global/styles/theme';
import { View } from "react-native";
import { Dashboard } from "@/src/screens/Dashboard";
import { Register } from "@/src/screens/Register";
import { CategorySelect } from "@/src/screens/CategorySelect";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        console.log('Loading fonts...');

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({  
          'Poppins-Regular': Poppins_400Regular,
          'Poppins-Medium': Poppins_500Medium,
          'Poppins-Bold': Poppins_700Bold,
        });

        console.log('Fonts loaded.');
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        console.log('App is ready.');
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      console.log('Hiding splash screen...');
      await SplashScreen.hideAsync();
      console.log('Splash screen hidden.');
    }
  }, [appIsReady]);

  if (!appIsReady) {
    console.log('App is not ready, returning null.');
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        {/* <Dashboard /> */}
        <Register />
        {/* <CategorySelect /> */}
      </ThemeProvider>
    </View>
  );
}

