import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutusScreen from './screens/AboutusScreen';
import AddnewaddressScreen from './screens/AddnewaddressScreen';
import CartEmptyScreen from './screens/CartEmptyScreen';
import CartScreen from './screens/CartScreen';
import ChangePasswordErrorScreen from './screens/ChangePasswordErrorScreen';
import ChangePasswordSuccessScreen from './screens/ChangePasswordSuccessScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmCodeScreen from './screens/ConfirmCodeScreen';
import DeliveryAddressScreen from './screens/DeliveryAddressScreen';
import DeliveryDetailsScreen from './screens/DeliveryDetailsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GetDiscountScreen from './screens/GetDiscountScreen';
import HomeScreen from './screens/HomeScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import OrdersScreen from './screens/OrdersScreen';
import PaymentmethodsScreen from './screens/PaymentmethodsScreen';
import ProfileScreen from './screens/ProfileScreen';
import PromocodeScreen from './screens/PromocodeScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import SearchScreen from './screens/SearchScreen';
import SearchaddressScreen from './screens/SearchaddressScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: theme.colors['Primary'],
        style: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-document-text-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/cart-outline"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/search"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/user-circle"
              size={25}
              color={focused ? theme.colors['Primary'] : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator headerMode="none" initialRouteName="OnboardingScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome Screen',
          }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            title: 'Edit Profile',
          }}
        />
        <Stack.Screen
          name="DeliveryAddressScreen"
          component={DeliveryAddressScreen}
          options={{
            title: 'Delivery Address',
          }}
        />
        <Stack.Screen
          name="PaymentmethodsScreen"
          component={PaymentmethodsScreen}
          options={{
            title: 'Payment methods',
          }}
        />
        <Stack.Screen
          name="PromocodeScreen"
          component={PromocodeScreen}
          options={{
            title: 'Promo code',
          }}
        />
        <Stack.Screen
          name="GetDiscountScreen"
          component={GetDiscountScreen}
          options={{
            title: 'Get Discount',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="NotificationDetailsScreen"
          component={NotificationDetailsScreen}
          options={{
            title: 'Notification Details',
          }}
        />
        <Stack.Screen
          name="AboutusScreen"
          component={AboutusScreen}
          options={{
            title: 'About us',
          }}
        />
        <Stack.Screen
          name="AddnewaddressScreen"
          component={AddnewaddressScreen}
          options={{
            title: 'Add new address',
          }}
        />
        <Stack.Screen
          name="SearchaddressScreen"
          component={SearchaddressScreen}
          options={{
            title: 'Search address',
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            title: 'Sign up',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Log in',
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            title: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{
            title: 'New Password ',
          }}
        />
        <Stack.Screen
          name="ChangePasswordSuccessScreen"
          component={ChangePasswordSuccessScreen}
          options={{
            title: 'Change Password  Success',
          }}
        />
        <Stack.Screen
          name="DeliveryDetailsScreen"
          component={DeliveryDetailsScreen}
          options={{
            title: 'Delivery Details',
          }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{
            title: 'Checkout',
          }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            title: 'Onboarding',
          }}
        />
        <Stack.Screen
          name="ConfirmCodeScreen"
          component={ConfirmCodeScreen}
          options={{
            title: 'Confirm Code',
          }}
        />
        <Stack.Screen
          name="RestaurantDetailsScreen"
          component={RestaurantDetailsScreen}
          options={{
            title: 'Restaurant Details',
          }}
        />
        <Stack.Screen
          name="ItemDetailsScreen"
          component={ItemDetailsScreen}
          options={{
            title: 'Item Details',
          }}
        />
        <Stack.Screen
          name="CartEmptyScreen"
          component={CartEmptyScreen}
          options={{
            title: 'Cart Empty',
          }}
        />
        <Stack.Screen
          name="ChangePasswordErrorScreen"
          component={ChangePasswordErrorScreen}
          options={{
            title: 'Change Password  Error',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
