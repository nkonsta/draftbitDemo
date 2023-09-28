import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewPasswordScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Back */}
      <Pressable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['header action'],
              {
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                width: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
              }
            ),
            dimensions.width
          )}
        >
          <Icon name={'Feather/chevron-left'} size={28} />
        </View>
      </Pressable>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: { minWidth: Breakpoints.BigScreen, value: 1 } },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: { minWidth: Breakpoints.BigScreen, value: 1 },
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {/* Top view */}
          <View
            style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}
          >
            {/* Screen heading */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 21 },
                    { minWidth: Breakpoints.Tablet, value: 25 },
                    { minWidth: Breakpoints.Laptop, value: 28 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                  ],
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {'New password'}
            </Text>
            {/* details */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_300Light',
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 18 },
                    { minWidth: Breakpoints.Laptop, value: 21 },
                    { minWidth: Breakpoints.Desktop, value: 23 },
                    { minWidth: Breakpoints.BigScreen, value: 25 },
                  ],
                  lineHeight: 21,
                  marginTop: 4,
                  padding: 20,
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {'Set your a new password'}
            </Text>
          </View>
          {/* Form */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginBottom: 35 },
              dimensions.width
            )}
          >
            {/* New password */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Desktop, value: 24 },
                    ],
                    opacity: 0.7,
                  }),
                  dimensions.width
                )}
              >
                {'New password'}
              </Text>
              <TextInput
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Enter password'}
                placeholderTextColor={theme.colors['Light']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Input'],
                    {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Desktop, value: 20 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 48 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 70 },
                      ],
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }
                  ),
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Repeat new password */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: { minWidth: Breakpoints.BigScreen, value: 1 },
                  marginTop: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Desktop, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                    opacity: 0.7,
                  }),
                  dimensions.width
                )}
              >
                {'Repeat new password'}
              </Text>
              <TextInput
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                onChangeText={newTextInputValue => {
                  const textInputValue = newTextInputValue;
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Enter password'}
                placeholderTextColor={theme.colors['Light']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Input'],
                    {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Desktop, value: 20 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 48 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 70 },
                      ],
                      marginTop: 10,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }
                  ),
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Set new password */}
            <Button
              disabled={false}
              onPress={() => {
                try {
                  navigation.navigate('ChangePasswordSuccessScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  borderRadius: 12,
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 16 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 24 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  marginTop: 40,
                }),
                dimensions.width
              )}
              title={'Set new password'}
            />
          </View>
          {/* Bottom View */}
          <View
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 20,
                paddingBottom: 40,
              },
              dimensions.width
            )}
          >
            {/* Return to login */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 20,
                  paddingBottom: 5,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              <Pressable
                onPress={() => {
                  try {
                    navigation.navigate('LoginScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginLeft: 8 },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Custom Color_3'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                    }),
                    dimensions.width
                  )}
                >
                  {'Return to login'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NewPasswordScreen);
