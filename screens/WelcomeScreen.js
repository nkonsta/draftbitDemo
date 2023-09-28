import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const WelcomeScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Content View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            marginBottom: 50,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Content}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              height: [
                { minWidth: Breakpoints.Mobile, value: 500 },
                { minWidth: Breakpoints.Tablet, value: 750 },
                { minWidth: Breakpoints.Laptop, value: 600 },
                { minWidth: Breakpoints.Desktop, value: 750 },
                { minWidth: Breakpoints.BigScreen, value: 900 },
              ],
              width: [
                { minWidth: Breakpoints.Mobile, value: 327 },
                { minWidth: Breakpoints.Tablet, value: 490 },
                { minWidth: Breakpoints.Laptop, value: 392 },
                { minWidth: Breakpoints.Desktop, value: 490 },
                { minWidth: Breakpoints.BigScreen, value: 588 },
              ],
            }),
            dimensions.width
          )}
        />
      </View>
      {/* Actions View */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Log in */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'],
              {
                backgroundColor: theme.colors['Custom Color'],
                borderColor: theme.colors['Primary'],
                borderWidth: 1.5,
                color: theme.colors['Primary'],
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Mobile, value: 48 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Log in'}
        />
        {/* Sign up */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('SignupScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn big screen'],
              {
                backgroundColor: {
                  minWidth: Breakpoints.Laptop,
                  value: theme.colors['Secondary'],
                },
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                height: [
                  { minWidth: Breakpoints.Mobile, value: 48 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 75 },
                ],
                marginTop: 25,
              }
            ),
            dimensions.width
          )}
          title={'Sign up'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
