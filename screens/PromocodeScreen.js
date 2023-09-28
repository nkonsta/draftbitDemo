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
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const PromocodeScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [PromoCodePopUp, setPromoCodePopUp] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['screen header view'],
            {
              height: [
                { minWidth: Breakpoints.Tablet, value: 65 },
                { minWidth: Breakpoints.Laptop, value: 75 },
                { minWidth: Breakpoints.Desktop, value: 85 },
                { minWidth: Breakpoints.BigScreen, value: 90 },
              ],
              marginRight: 48,
            }
          ),
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
            <Icon name={'Ionicons/chevron-back'} size={28} />
          </View>
        </Pressable>
        {/* Screen heading */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              flex: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 19 },
                { minWidth: Breakpoints.Tablet, value: 22 },
                { minWidth: Breakpoints.Laptop, value: 25 },
                { minWidth: Breakpoints.Desktop, value: 28 },
                { minWidth: Breakpoints.BigScreen, value: 30 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Promo code'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            flex: 1,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Options */}
        <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
          {/* Enter promo code */}
          <Pressable
            onPress={() => {
              try {
                setPromoCodePopUp(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginTop: 8 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 50 },
                    { minWidth: Breakpoints.Tablet, value: 65 },
                    { minWidth: Breakpoints.Laptop, value: 70 },
                    { minWidth: Breakpoints.Desktop, value: 75 },
                    { minWidth: Breakpoints.BigScreen, value: 85 },
                  ],
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Menu Icon */}
              <Image
                resizeMode={'cover'}
                source={Images.TicketStar}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 24 },
                      { minWidth: Breakpoints.Tablet, value: 30 },
                      { minWidth: Breakpoints.Laptop, value: 32 },
                      { minWidth: Breakpoints.BigScreen, value: 40 },
                      { minWidth: Breakpoints.Desktop, value: 35 },
                    ],
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 24 },
                      { minWidth: Breakpoints.Tablet, value: 30 },
                      { minWidth: Breakpoints.Laptop, value: 32 },
                      { minWidth: Breakpoints.BigScreen, value: 40 },
                      { minWidth: Breakpoints.Desktop, value: 35 },
                    ],
                  }),
                  dimensions.width
                )}
              />
              {/* Details */}
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16, paddingRight: 16 },
                  dimensions.width
                )}
              >
                {/* title */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Tablet, value: 19 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                    }),
                    dimensions.width
                  )}
                >
                  {'Enter promo code'}
                </Text>
              </View>
              <Icon name={'Feather/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Get discount */}
          <Pressable
            onPress={() => {
              try {
                navigation.navigate('GetDiscountScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 50 },
                    { minWidth: Breakpoints.BigScreen, value: 85 },
                    { minWidth: Breakpoints.Desktop, value: 75 },
                    { minWidth: Breakpoints.Laptop, value: 70 },
                    { minWidth: Breakpoints.Tablet, value: 65 },
                  ],
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* Menu Icon */}
              <Image
                resizeMode={'cover'}
                source={Images.DiscountShape}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 24 },
                      { minWidth: Breakpoints.Tablet, value: 30 },
                      { minWidth: Breakpoints.Laptop, value: 32 },
                      { minWidth: Breakpoints.BigScreen, value: 40 },
                      { minWidth: Breakpoints.Desktop, value: 35 },
                    ],
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 24 },
                      { minWidth: Breakpoints.Tablet, value: 30 },
                      { minWidth: Breakpoints.Laptop, value: 32 },
                      { minWidth: Breakpoints.BigScreen, value: 40 },
                      { minWidth: Breakpoints.Desktop, value: 35 },
                    ],
                  }),
                  dimensions.width
                )}
              />
              {/* Details */}
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 16, paddingRight: 16 },
                  dimensions.width
                )}
              >
                {/* title */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Tablet, value: 19 },
                      ],
                    }),
                    dimensions.width
                  )}
                >
                  {'Get discount'}
                </Text>
              </View>
              <Icon name={'Feather/chevron-right'} size={24} />
            </View>
          </Pressable>
        </View>
        {/* Share discount */}
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['action btn tablet'],
              { backgroundColor: theme.colors['Custom Color_5'], margin: 20 }
            ),
            dimensions.width
          )}
          title={'Share discount'}
        />
      </View>
      {/* Entry Promo Card Modal */}
      <>
        {!PromoCodePopUp ? null : (
          <Modal animationType={'slide'} transparent={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  bottom: 0,
                  flex: 1,
                  left: 0,
                  opacity: 0.25,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                },
                dimensions.width
              )}
            />
            <KeyboardAvoidingView
              behavior={'padding'}
              enabled={true}
              style={StyleSheet.applyWidth(
                { bottom: 0, left: 0, position: 'absolute', right: 0 },
                dimensions.width
              )}
            >
              {/* Promo code pop up */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom Color'],
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    bottom: 0,
                    flex: 1,
                    left: 0,
                    padding: 20,
                    position: 'absolute',
                    right: 0,
                  },
                  dimensions.width
                )}
              >
                {/* header */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 40,
                    },
                    dimensions.width
                  )}
                >
                  {/* heading */}
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          flex: 1,
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 18 },
                            { minWidth: Breakpoints.Tablet, value: 21 },
                            { minWidth: Breakpoints.Laptop, value: 23 },
                            { minWidth: Breakpoints.Desktop, value: 25 },
                            { minWidth: Breakpoints.BigScreen, value: 27 },
                          ],
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Promo code'}
                  </Text>
                </View>
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
                  placeholder={'Enter promo code'}
                  placeholderTextColor={theme.colors['Light']}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextInputStyles(theme)['Text Input'],
                      {
                        borderRadius: 12,
                        fontFamily: 'Inter_400Regular',
                        fontSize: [
                          { minWidth: Breakpoints.Tablet, value: 17 },
                          { minWidth: Breakpoints.Laptop, value: 19 },
                          { minWidth: Breakpoints.Desktop, value: 21 },
                          { minWidth: Breakpoints.BigScreen, value: 23 },
                        ],
                        height: [
                          { minWidth: Breakpoints.Mobile, value: 48 },
                          { minWidth: Breakpoints.Tablet, value: 60 },
                          { minWidth: Breakpoints.Laptop, value: 65 },
                          { minWidth: Breakpoints.Desktop, value: 70 },
                          { minWidth: Breakpoints.BigScreen, value: 80 },
                        ],
                        paddingLeft: 16,
                        paddingRight: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  value={textInputValue}
                />
                {/* Actions */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingBottom: 20,
                    },
                    dimensions.width
                  )}
                >
                  {/* Apply */}
                  <Button
                    onPress={() => {
                      try {
                        setPromoCodePopUp(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Action button'],
                        {
                          backgroundColor: theme.colors['Custom Color_5'],
                          fontSize: [
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                          height: [
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          marginTop: [
                            { minWidth: Breakpoints.Mobile, value: 20 },
                            { minWidth: Breakpoints.Tablet, value: 30 },
                            { minWidth: Breakpoints.Laptop, value: 35 },
                            { minWidth: Breakpoints.BigScreen, value: 40 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Apply'}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(PromocodeScreen);
