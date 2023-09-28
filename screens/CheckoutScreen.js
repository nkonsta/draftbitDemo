import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const CheckoutScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [AddressRadioButtoGroup, setAddressRadioButtoGroup] = React.useState(1);
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [PromoCodeModal, setPromoCodeModal] = React.useState(false);
  const [ShippingAddressModal, setShippingAddressModal] = React.useState(false);
  const [paymentMethodRadioGroup, setPaymentMethodRadioGroup] =
    React.useState(1);
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
              paddingLeft: 10,
              paddingRight: 10,
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
          {'Check out'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'space-between',
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
                { minWidth: Breakpoints.Desktop, value: 40 },
                { minWidth: Breakpoints.Laptop, value: 30 },
                { minWidth: Breakpoints.Tablet, value: 25 },
              ],
            },
            dimensions.width
          )}
        >
          {/* Main View */}
          <View>
            {/* Shipping address */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 20, paddingTop: 10 },
                dimensions.width
              )}
            >
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
                {'Shipping address'}
              </Text>
              {/* Change Address */}
              <Pressable
                onPress={() => {
                  try {
                    setShippingAddressModal(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 12 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderColor: theme.colors['Light'],
                      borderRadius: 8,
                      borderWidth: 1,
                      flexDirection: 'row',
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 56 },
                        { minWidth: Breakpoints.Tablet, value: 65 },
                        { minWidth: Breakpoints.Laptop, value: 70 },
                        { minWidth: Breakpoints.Desktop, value: 75 },
                        { minWidth: Breakpoints.BigScreen, value: 90 },
                      ],
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                      paddingRight: 15,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.Location}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 24 },
                            { minWidth: Breakpoints.Tablet, value: 32 },
                            { minWidth: Breakpoints.Laptop, value: 36 },
                            { minWidth: Breakpoints.Desktop, value: 38 },
                            { minWidth: Breakpoints.BigScreen, value: 42 },
                          ],
                          width: [
                            { minWidth: Breakpoints.Mobile, value: 24 },
                            { minWidth: Breakpoints.Tablet, value: 32 },
                            { minWidth: Breakpoints.Laptop, value: 36 },
                            { minWidth: Breakpoints.Desktop, value: 38 },
                            { minWidth: Breakpoints.BigScreen, value: 42 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  >
                    {/* Name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            fontFamily: 'Inter_500Medium',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 23 },
                              { minWidth: Breakpoints.BigScreen, value: 25 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Home'}
                    </Text>
                    {/* Address */}
                    <Text
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Medium'],
                            fontFamily: 'Inter_300Light',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                              { minWidth: Breakpoints.Laptop, value: 17 },
                              { minWidth: Breakpoints.Desktop, value: 19 },
                              { minWidth: Breakpoints.BigScreen, value: 21 },
                            ],
                            marginTop: 3,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'NYC, Broadway ave 79'}
                    </Text>
                  </View>
                  <Icon name={'Feather/chevron-right'} size={24} />
                </View>
              </Pressable>
            </View>
            {/* Payment method */}
            <View
              style={StyleSheet.applyWidth(
                {
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Laptop, value: 25 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                  ],
                  paddingBottom: 20,
                },
                dimensions.width
              )}
            >
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
                {'Payment method'}
              </Text>

              <Pressable
                onPress={() => {
                  try {
                    setPaymentModal(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 12 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderColor: theme.colors['Light'],
                      borderRadius: 8,
                      borderWidth: 1,
                      flexDirection: 'row',
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 56 },
                        { minWidth: Breakpoints.Tablet, value: 65 },
                        { minWidth: Breakpoints.Laptop, value: 70 },
                        { minWidth: Breakpoints.Desktop, value: 75 },
                        { minWidth: Breakpoints.BigScreen, value: 90 },
                      ],
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                      paddingRight: 15,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.Payoneer}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 22 },
                            { minWidth: Breakpoints.Tablet, value: 28 },
                            { minWidth: Breakpoints.Laptop, value: 33 },
                            { minWidth: Breakpoints.BigScreen, value: 37 },
                          ],
                          width: [
                            { minWidth: Breakpoints.Mobile, value: 32 },
                            { minWidth: Breakpoints.Tablet, value: 41 },
                            { minWidth: Breakpoints.Laptop, value: 48 },
                            { minWidth: Breakpoints.BigScreen, value: 54 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  >
                    {/* Name */}
                    <Text
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            fontFamily: 'Inter_500Medium',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 23 },
                              { minWidth: Breakpoints.BigScreen, value: 25 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Payoneer'}
                    </Text>
                    {/* Card details */}
                    <Text
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'],
                          {
                            color: theme.colors['Medium'],
                            fontFamily: 'Inter_300Light',
                            fontSize: [
                              { minWidth: Breakpoints.Mobile, value: 12 },
                              { minWidth: Breakpoints.BigScreen, value: 21 },
                              { minWidth: Breakpoints.Desktop, value: 19 },
                              { minWidth: Breakpoints.Laptop, value: 17 },
                              { minWidth: Breakpoints.Tablet, value: 15 },
                            ],
                            marginTop: 3,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Mastercard **** 7890'}
                    </Text>
                  </View>
                  <Icon name={'Feather/chevron-right'} size={24} />
                </View>
              </Pressable>
            </View>
            {/* Promo code */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color_7'],
                  borderRadius: 8,
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 20 },
                    { minWidth: Breakpoints.Tablet, value: 40 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  paddingLeft: 20,
                  paddingRight: 10,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom Color_5']}
                name={'MaterialCommunityIcons/brightness-percent'}
                size={24}
              />
              {/* Promo code */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    flex: 1,
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.Desktop, value: 21 },
                      { minWidth: Breakpoints.BigScreen, value: 23 },
                    ],
                    marginLeft: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Promo code'}
              </Text>
              {/* Apply */}
              <Pressable
                onPress={() => {
                  try {
                    setPromoCodeModal(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_5'],
                      borderRadius: 8,
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 32 },
                        { minWidth: Breakpoints.Tablet, value: 40 },
                        { minWidth: Breakpoints.Laptop, value: 45 },
                        { minWidth: Breakpoints.Desktop, value: 50 },
                        { minWidth: Breakpoints.BigScreen, value: 60 },
                      ],
                      justifyContent: 'center',
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 89 },
                        { minWidth: Breakpoints.Tablet, value: 100 },
                        { minWidth: Breakpoints.Laptop, value: 110 },
                        { minWidth: Breakpoints.Desktop, value: 120 },
                        { minWidth: Breakpoints.BigScreen, value: 135 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Custom Color'],
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 12 },
                            { minWidth: Breakpoints.Tablet, value: 15 },
                            { minWidth: Breakpoints.Laptop, value: 17 },
                            { minWidth: Breakpoints.Desktop, value: 19 },
                            { minWidth: Breakpoints.BigScreen, value: 21 },
                          ],
                          letterSpacing: 0.3,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Apply'}
                  </Text>
                </View>
              </Pressable>
            </View>
            {/* Amounts */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Light'],
                  borderStyle: 'dotted',
                  borderTopWidth: 1,
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Laptop, value: 25 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                  ],
                  paddingBottom: 30,
                  paddingTop: 30,
                },
                dimensions.width
              )}
            >
              {/* Subtotal */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Inter_400Regular',
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
                  {'Subtotal'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Inter_400Regular',
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
                  {'$32.60'}
                </Text>
              </View>
              {/* Delivery */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 15 },
                      { minWidth: Breakpoints.Tablet, value: 25 },
                      { minWidth: Breakpoints.Laptop, value: 30 },
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
                  {'Delivery'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 19 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                    }),
                    dimensions.width
                  )}
                >
                  {'$2.00'}
                </Text>
              </View>
            </View>
            {/* Total */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: theme.colors['Light'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 20,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 15 },
                      { minWidth: Breakpoints.Tablet, value: 18 },
                      { minWidth: Breakpoints.Laptop, value: 20 },
                      { minWidth: Breakpoints.Desktop, value: 22 },
                      { minWidth: Breakpoints.BigScreen, value: 24 },
                    ],
                  }),
                  dimensions.width
                )}
              >
                {'Total'}
              </Text>

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
                {'$34.60'}
              </Text>
            </View>
          </View>
          {/* Pay */}
          <Button
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn tablet'],
                {
                  fontSize: 16,
                  height: 48,
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 25 },
                    { minWidth: Breakpoints.Tablet, value: 40 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                    { minWidth: Breakpoints.BigScreen, value: 60 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Pay $34.60'}
          />
        </View>
      </ScrollView>
      {/* Entry Promo Card Modal */}
      <>
        {!PromoCodeModal ? null : (
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
                    padding: [
                      { minWidth: Breakpoints.Mobile, value: 20 },
                      { minWidth: Breakpoints.Tablet, value: 30 },
                      { minWidth: Breakpoints.Laptop, value: 35 },
                      { minWidth: Breakpoints.Desktop, value: 40 },
                      { minWidth: Breakpoints.BigScreen, value: 45 },
                    ],
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
                      marginBottom: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 55 },
                        { minWidth: Breakpoints.Laptop, value: 60 },
                        { minWidth: Breakpoints.Desktop, value: 65 },
                        { minWidth: Breakpoints.BigScreen, value: 75 },
                      ],
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
                            { minWidth: Breakpoints.Desktop, value: 24 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
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
                      setTextInputValue(textInputValue);
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
                          { minWidth: Breakpoints.Desktop, value: 20 },
                          { minWidth: Breakpoints.BigScreen, value: 22 },
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
                        setPromoCodeModal(false);
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
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                          ],
                          height: [
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          marginTop: [
                            { minWidth: Breakpoints.Mobile, value: 20 },
                            { minWidth: Breakpoints.Tablet, value: 35 },
                            { minWidth: Breakpoints.Laptop, value: 40 },
                            { minWidth: Breakpoints.Desktop, value: 45 },
                            { minWidth: Breakpoints.BigScreen, value: 55 },
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
      {/* PaymentMethodModal */}
      <>
        {!PaymentModal ? null : (
          <Modal animationType={'none'} transparent={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  flex: 1,
                  opacity: 0.25,
                },
                dimensions.width
              )}
            />
            {/* Methds */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  bottom: 0,
                  left: 0,
                  paddingBottom: 10,
                  paddingTop: 20,
                  position: 'absolute',
                  right: 0,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 18 },
                      { minWidth: Breakpoints.Tablet, value: 21 },
                      { minWidth: Breakpoints.Laptop, value: 23 },
                      { minWidth: Breakpoints.Desktop, value: 24 },
                      { minWidth: Breakpoints.BigScreen, value: 26 },
                    ],
                    textAlign: 'center',
                  }),
                  dimensions.width
                )}
              >
                {'Payment method'}
              </Text>

              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  try {
                    setPaymentMethodRadioGroup(newRadioButtonGroupValue);
                    setPaymentModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={paymentMethodRadioGroup}
              >
                {/* Payment methods */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      marginTop: 10,
                      padding: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 35 },
                        { minWidth: Breakpoints.Laptop, value: 40 },
                        { minWidth: Breakpoints.Desktop, value: 45 },
                        { minWidth: Breakpoints.BigScreen, value: 50 },
                      ],
                      paddingBottom: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Payoneer */}
                  <Pressable
                    onPress={() => {
                      try {
                        setPaymentMethodRadioGroup(1);
                        setPaymentModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
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
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Payoneer}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 22 },
                                { minWidth: Breakpoints.Tablet, value: 28 },
                                { minWidth: Breakpoints.Laptop, value: 31 },
                                { minWidth: Breakpoints.BigScreen, value: 34 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 32 },
                                { minWidth: Breakpoints.Tablet, value: 41 },
                                { minWidth: Breakpoints.Laptop, value: 45 },
                                { minWidth: Breakpoints.BigScreen, value: 50 },
                              ],
                            }
                          ),
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Payoneer'}
                        </Text>
                        {/* ~ value */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_300Light',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 21,
                                  },
                                  { minWidth: Breakpoints.Desktop, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 17 },
                                  { minWidth: Breakpoints.Tablet, value: 15 },
                                ],
                                marginTop: 4,
                                opacity: 0.6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Mastercard **** 7890'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        size={24}
                        unselectedColor={theme.colors['Divider']}
                        value={1}
                      />
                    </View>
                  </Pressable>
                  {/* Transfer wise */}
                  <Pressable
                    onPress={() => {
                      try {
                        setPaymentMethodRadioGroup(2);
                        setPaymentModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        marginTop: [
                          { minWidth: Breakpoints.Mobile, value: 14 },
                          { minWidth: Breakpoints.Tablet, value: 25 },
                          { minWidth: Breakpoints.BigScreen, value: 30 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                          { minWidth: Breakpoints.Laptop, value: 20 },
                        ],
                      },
                      dimensions.width
                    )}
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
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.TransferWise}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 22 },
                                { minWidth: Breakpoints.Tablet, value: 28 },
                                { minWidth: Breakpoints.Laptop, value: 31 },
                                { minWidth: Breakpoints.BigScreen, value: 34 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 32 },
                                { minWidth: Breakpoints.Tablet, value: 41 },
                                { minWidth: Breakpoints.Laptop, value: 45 },
                                { minWidth: Breakpoints.BigScreen, value: 50 },
                              ],
                            }
                          ),
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Transfer wise'}
                        </Text>
                        {/* ~ value */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_300Light',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 15 },
                                  { minWidth: Breakpoints.Laptop, value: 17 },
                                  { minWidth: Breakpoints.Desktop, value: 19 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 21,
                                  },
                                ],
                                marginTop: 4,
                                opacity: 0.6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Visa card **** 7890'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        size={24}
                        unselectedColor={theme.colors['Divider']}
                        value={2}
                      />
                    </View>
                  </Pressable>
                  {/* Cash */}
                  <Pressable
                    onPress={() => {
                      try {
                        setPaymentMethodRadioGroup(3);
                        setPaymentModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        marginTop: [
                          { minWidth: Breakpoints.Mobile, value: 14 },
                          { minWidth: Breakpoints.Tablet, value: 25 },
                          { minWidth: Breakpoints.BigScreen, value: 30 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                          { minWidth: Breakpoints.Laptop, value: 20 },
                        ],
                      },
                      dimensions.width
                    )}
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
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Cash}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 22 },
                                { minWidth: Breakpoints.Tablet, value: 28 },
                                { minWidth: Breakpoints.Laptop, value: 31 },
                                { minWidth: Breakpoints.BigScreen, value: 34 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 32 },
                                { minWidth: Breakpoints.Tablet, value: 41 },
                                { minWidth: Breakpoints.Laptop, value: 45 },
                                { minWidth: Breakpoints.BigScreen, value: 50 },
                              ],
                            }
                          ),
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Cash'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        size={24}
                        unselectedColor={theme.colors['Divider']}
                        value={3}
                      />
                    </View>
                  </Pressable>
                </View>
              </RadioButtonGroup>

              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderColor: theme.colors['Divider'],
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      margin: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 35 },
                        { minWidth: Breakpoints.Laptop, value: 40 },
                        { minWidth: Breakpoints.Desktop, value: 45 },
                        { minWidth: Breakpoints.BigScreen, value: 50 },
                      ],
                      marginTop: [
                        { minWidth: Breakpoints.Mobile, value: 0 },
                        { minWidth: Breakpoints.Tablet, value: 15 },
                        { minWidth: Breakpoints.Laptop, value: 15 },
                        { minWidth: Breakpoints.Desktop, value: 15 },
                        { minWidth: Breakpoints.BigScreen, value: 15 },
                      ],
                      paddingTop: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.Laptop, value: 35 },
                        { minWidth: Breakpoints.Desktop, value: 40 },
                        { minWidth: Breakpoints.BigScreen, value: 45 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Primary']}
                    name={'AntDesign/pluscircle'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                          marginLeft: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Add a new card'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </Modal>
        )}
      </>
      {/* ShipppingAddressModal */}
      <>
        {!ShippingAddressModal ? null : (
          <Modal animationType={'none'} transparent={true}>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Strong'],
                  flex: 1,
                  opacity: 0.25,
                },
                dimensions.width
              )}
            />
            {/* Addresses */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  bottom: 0,
                  left: 0,
                  paddingBottom: 10,
                  paddingTop: 20,
                  position: 'absolute',
                  right: 0,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 18 },
                      { minWidth: Breakpoints.Tablet, value: 21 },
                      { minWidth: Breakpoints.Laptop, value: 23 },
                      { minWidth: Breakpoints.Desktop, value: 25 },
                      { minWidth: Breakpoints.BigScreen, value: 27 },
                    ],
                    textAlign: 'center',
                  }),
                  dimensions.width
                )}
              >
                {'Shipping address'}
              </Text>

              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  try {
                    setAddressRadioButtoGroup(newRadioButtonGroupValue);
                    setShippingAddressModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={AddressRadioButtoGroup}
              >
                {/* Addresses */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      marginTop: 10,
                      padding: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.BigScreen, value: 40 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  {/* Current address */}
                  <Pressable
                    onPress={() => {
                      try {
                        setAddressRadioButtoGroup(1);
                        setShippingAddressModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 50 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 75 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Gps}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                            }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Details */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flex: 1,
                            paddingLeft: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 30 },
                            ],
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {/* title */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Current address'}
                        </Text>
                        {/* ~ value */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_300Light',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 14 },
                                  { minWidth: Breakpoints.Laptop, value: 16 },
                                  { minWidth: Breakpoints.Desktop, value: 18 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 20,
                                  },
                                ],
                                marginTop: 4,
                                opacity: 0.6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Doyers str. 206'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
                        size={24}
                        unselectedColor={theme.colors.primary}
                        unselectedIcon={'MaterialCommunityIcons/blank'}
                        value={1}
                      />
                    </View>
                  </Pressable>
                  {/* Home */}
                  <Pressable
                    onPress={() => {
                      try {
                        setAddressRadioButtoGroup(2);
                        setShippingAddressModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { marginTop: 14 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 50 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 75 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Location}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                            }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Details */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flex: 1,
                            paddingLeft: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 30 },
                            ],
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {/* title */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Home'}
                        </Text>
                        {/* ~ value */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_300Light',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 14 },
                                  { minWidth: Breakpoints.Laptop, value: 16 },
                                  { minWidth: Breakpoints.Desktop, value: 18 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 20,
                                  },
                                ],
                                marginTop: 4,
                                opacity: 0.6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'NYC, Broadway ave 79'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
                        size={24}
                        unselectedColor={theme.colors.primary}
                        unselectedIcon={'MaterialCommunityIcons/blank'}
                        value={2}
                      />
                    </View>
                  </Pressable>
                  {/* Work */}
                  <Pressable
                    onPress={() => {
                      try {
                        setAddressRadioButtoGroup(3);
                        setShippingAddressModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { marginTop: 14 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 50 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 75 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Location}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                            }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Details */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flex: 1,
                            paddingLeft: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 30 },
                            ],
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {/* title */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Work'}
                        </Text>
                        {/* ~ value */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_300Light',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 12 },
                                  { minWidth: Breakpoints.Tablet, value: 14 },
                                  { minWidth: Breakpoints.Laptop, value: 16 },
                                  { minWidth: Breakpoints.Desktop, value: 18 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 20,
                                  },
                                ],
                                marginTop: 4,
                                opacity: 0.6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'St. Mark’s Place Business Plaza 18'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
                        size={24}
                        unselectedColor={theme.colors.primary}
                        unselectedIcon={'MaterialCommunityIcons/blank'}
                        value={3}
                      />
                    </View>
                  </Pressable>
                  {/* Park Avenue 15 */}
                  <Pressable
                    onPress={() => {
                      try {
                        setAddressRadioButtoGroup(4);
                        setShippingAddressModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { marginTop: 14 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 50 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 75 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Location}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                            }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Details */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flex: 1,
                            paddingLeft: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 30 },
                            ],
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {/* title */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Park Avenue 15'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
                        size={24}
                        unselectedColor={theme.colors.primary}
                        unselectedIcon={'MaterialCommunityIcons/blank'}
                        value={4}
                      />
                    </View>
                  </Pressable>
                  {/* Washington str. 58/105 */}
                  <Pressable
                    onPress={() => {
                      try {
                        setAddressRadioButtoGroup(5);
                        setShippingAddressModal(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      { marginTop: 14 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 50 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 75 },
                          ],
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Menu Icon */}
                      <Image
                        resizeMode={'cover'}
                        source={Images.Location}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 24 },
                                { minWidth: Breakpoints.Tablet, value: 32 },
                                { minWidth: Breakpoints.BigScreen, value: 40 },
                              ],
                            }
                          ),
                          dimensions.width
                        )}
                      />
                      {/* Details */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flex: 1,
                            paddingLeft: [
                              { minWidth: Breakpoints.Mobile, value: 16 },
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.BigScreen, value: 30 },
                            ],
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {/* title */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'Inter_500Medium',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 25,
                                  },
                                  { minWidth: Breakpoints.Desktop, value: 23 },
                                  { minWidth: Breakpoints.Laptop, value: 21 },
                                  { minWidth: Breakpoints.Tablet, value: 19 },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Washington str. 58/105'}
                        </Text>
                      </View>
                      <RadioButton
                        color={theme.colors['Custom Color_3']}
                        selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
                        size={24}
                        unselectedColor={theme.colors.primary}
                        unselectedIcon={'MaterialCommunityIcons/blank'}
                        value={5}
                      />
                    </View>
                  </Pressable>
                </View>
              </RadioButtonGroup>
              {/* Add New */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderColor: theme.colors['Divider'],
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      margin: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.BigScreen, value: 40 },
                      ],
                      marginTop: 0,
                      paddingTop: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Primary']}
                    name={'AntDesign/pluscircle'}
                    size={24}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'Inter_500Medium',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 19 },
                            { minWidth: Breakpoints.Laptop, value: 21 },
                            { minWidth: Breakpoints.Desktop, value: 23 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                          marginLeft: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Add a new address'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(CheckoutScreen);
