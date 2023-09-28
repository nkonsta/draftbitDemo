import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
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
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
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
                  { minWidth: Breakpoints.Laptop, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                ],
                width: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                  { minWidth: Breakpoints.Laptop, value: 60 },
                ],
              }
            ),
            dimensions.width
          )}
        >
          <Icon name={'Feather/chevron-left'} size={28} />
        </View>
      </Pressable>
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
              { minWidth: Breakpoints.BigScreen, value: 32 },
            ],
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Sign up'}
      </Text>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
      >
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              flex: 1,
              padding: 20,
            },
            dimensions.width
          )}
        >
          {/* Name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
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
              {'Name'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'John'}
              placeholderTextColor={theme.colors['Light']}
              selectionColor={theme.colors['Primary']}
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
          {/* Email */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                ],
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
              {'Email'}
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
              placeholder={'example@mail.com'}
              placeholderTextColor={theme.colors['Light']}
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
          {/* Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                ],
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
              {'Phone'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              keyboardType={'numeric'}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'+0 000 000 00 00'}
              placeholderTextColor={theme.colors['Light']}
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
          {/* Password */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                ],
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
              {'Password'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
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
            {/* Note */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Light'],
                  fontFamily: 'Inter_300Light',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 11 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.Desktop, value: 17 },
                    { minWidth: Breakpoints.BigScreen, value: 20 },
                  ],
                  marginTop: 8,
                }),
                dimensions.width
              )}
            >
              {'At least one number and caps letter'}
            </Text>
          </View>
        </View>
        {/* Bottom View */}
        <View
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          {/* Sign up */}
          <Button
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
                margin: 20,
              }),
              dimensions.width
            )}
            title={'Sign up'}
          />
          {/* or */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Inter_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                margin: [
                  { minWidth: Breakpoints.Tablet, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          {/* Social options */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 6,
                paddingTop: 6,
              },
              dimensions.width
            )}
          >
            {/* Google */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                    { minWidth: Breakpoints.Desktop, value: 15 },
                    { minWidth: Breakpoints.Laptop, value: 15 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Google}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
            {/* FB */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.FB}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
            {/* Apple */}
            <Pressable
              style={StyleSheet.applyWidth(
                {
                  marginLeft: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  marginRight: [
                    { minWidth: Breakpoints.Mobile, value: 6 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Apple}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      {
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                        width: [
                          { minWidth: Breakpoints.Mobile, value: 24 },
                          { minWidth: Breakpoints.Tablet, value: 40 },
                          { minWidth: Breakpoints.BigScreen, value: 65 },
                        ],
                      }
                    ),
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </View>
          {/* Terms and conditions */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: [
                  { minWidth: Breakpoints.Laptop, value: 20 },
                  { minWidth: Breakpoints.Tablet, value: 40 },
                  { minWidth: Breakpoints.Mobile, value: 20 },
                ],
                paddingBottom: 5,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.BigScreen, value: 25 },
                    { minWidth: Breakpoints.Tablet, value: 18 },
                  ],
                  marginTop: [
                    { minWidth: Breakpoints.Laptop, value: 25 },
                    { minWidth: Breakpoints.BigScreen, value: 60 },
                  ],
                  opacity: 0.8,
                }),
                dimensions.width
              )}
            >
              {'By signing up you agree'}
            </Text>

            <Pressable
              style={StyleSheet.applyWidth({ marginLeft: 8 }, dimensions.width)}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Custom Color_3'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 14 },
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.BigScreen, value: 25 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Laptop, value: 25 },
                      { minWidth: Breakpoints.BigScreen, value: 60 },
                    ],
                  }),
                  dimensions.width
                )}
              >
                {'terms and conditions'}
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SignupScreen);
