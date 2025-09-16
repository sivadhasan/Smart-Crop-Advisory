// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

// Screens
import Welcome from '../Smart/src/pages/Welcome';
import Login from '../Smart/src/pages/Login';
import Dashboard from '../Smart/src/pages/Dashboard';
import CropAdvisory from '../Smart/src/pages/CropAdvisory';
import PestScanner from '../Smart/src/pages/PestScanner';
import Weather from '../Smart/src/pages/Weather';
import MarketPrices from '../Smart/src/pages/MarketPrices';
import NotFound from '../Smart/src/pages/NotFound';

// New: Import ToastProvider
import { ToastProvider } from '../Smart/src/hooks/ToastProvider'; 
import Toaster from './src/hooks/Toaster';

// React Navigation Stack
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Dashboard: undefined;
  CropAdvisory: undefined;
  PestScanner: undefined;
  Weather: undefined;
  MarketPrices: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      <ToastProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="CropAdvisory" component={CropAdvisory} />
          <Stack.Screen name="PestScanner" component={PestScanner} />
          <Stack.Screen name="Weather" component={Weather} />
          <Stack.Screen name="MarketPrices" component={MarketPrices} />
          <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toaster/>
      </ToastProvider>
    </>
  );
};

export default App;
















// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
