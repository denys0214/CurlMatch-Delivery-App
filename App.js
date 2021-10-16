/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AuthContext} from './context';
import Login from './Screens/login/Login';

import Premimum from './Screens/premimumScreen/premimumScreen';
import Signup from './Screens/signup/signup';
import PrefrenceScreen from './Screens/prefrence/newPrefrence';
import DashBoard from './Screens/dashboard/Dashboard';

import Children from './Screens/productsDash/children/children';
import Coily from './Screens/productsDash/coily/coily';
import Curls from './Screens/productsDash/curls/curls';
import Kinky from './Screens/productsDash/kinky/kinky';
import Multi from './Screens/productsDash/multi/multi';
import Waves from './Screens/productsDash/waves/waves';

import ProductsDetails from './Screens/productDetails/productDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [userToken, setuserToken] = useState(null);

  const RootStackScreen = ({userToken}) => {
    return (
      <RootStack.Navigator headerMode="none">
        {userToken ? (
          <RootStack.Screen name="Apps" component={DrawerScreen} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        )}
      </RootStack.Navigator>
    );
  };
  const authContext = React.useMemo(() => {
    return {
      SignInco: () => {
        setuserToken('asdf');
      },
      Signoutco: () => {
        setuserToken(null);
      },
    };
  }, []);
  const stacknavigator = (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );

  const DrawerScreen = () => (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={{
        //backgroundColor: 'lightblue',
        width: '60%',
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerLabel: 'Dashboard',
        }}
      />
    </Drawer.Navigator>
  );
  const DashboardScreen = () => {
    return (
      <Stack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="Children" component={Children} />
        <Stack.Screen name="Coily" component={Coily} />
        <Stack.Screen name="Curls" component={Curls} />
        <Stack.Screen name="Kinky" component={Kinky} />
        <Stack.Screen name="Multi" component={Multi} />
        <Stack.Screen name="Waves" component={Waves} />
      </Stack.Navigator>
    );
  };
  const AuthStackScreen = () => (
    <AuthStack.Navigator
      initialRouteName={'Signin'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Signin" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
  return <>{stacknavigator}</>;
};

const styles = StyleSheet.create({});

export default App;
