import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View, useWindowDimensions } from 'react-native';

const AddnewaddressScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [AddressModal, setAddressModal] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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
                    { minWidth: Breakpoints.Desktop, value: 70 },
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
          {'New address'}
        </Text>
      </View>
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            flex: 1,
            justifyContent: 'flex-end',
          },
          dimensions.width
        )}
      >
        {/* Search */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderColor: theme.colors['Light'],
              borderRadius: 100,
              borderWidth: 1,
              flexDirection: 'row',
              height: [
                { minWidth: Breakpoints.Mobile, value: 48 },
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.Laptop, value: 65 },
                { minWidth: Breakpoints.Desktop, value: 70 },
                { minWidth: Breakpoints.BigScreen, value: 80 },
              ],
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: [
                { minWidth: Breakpoints.Mobile, value: 16 },
                { minWidth: Breakpoints.Tablet, value: 20 },
                { minWidth: Breakpoints.Laptop, value: 25 },
                { minWidth: Breakpoints.BigScreen, value: 35 },
              ],
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Light']}
            name={'Ionicons/md-search-outline'}
            size={24}
          />
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
            placeholder={'Search a place'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 18 },
                    { minWidth: Breakpoints.Laptop, value: 20 },
                    { minWidth: Breakpoints.Desktop, value: 22 },
                    { minWidth: Breakpoints.BigScreen, value: 24 },
                  ],
                  width: '85%',
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>

        <MapView
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          latitude={37.4029}
          loadingEnabled={false}
          longitude={-122.1218}
          mapType={'satellite'}
          rotateEnabled={false}
          scrollEnabled={false}
          showsPointsOfInterest={false}
          style={StyleSheet.applyWidth(
            GlobalStyles.MapViewStyles(theme)['Map View'],
            dimensions.width
          )}
          zoom={20}
          zoomEnabled={false}
        >
          <MapMarker
            latitude={37.4029}
            longitude={-122.1218}
            pinColor={theme.colors['Primary']}
            title={'NYC, 5th Avenue 128'}
          />
        </MapView>
      </View>
      {/* Bottom view */}
      <View style={StyleSheet.applyWidth({ padding: 20 }, dimensions.width)}>
        {/* Address */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Laptop, value: 25 },
                { minWidth: Breakpoints.Tablet, value: 20 },
              ],
              paddingTop: [
                { minWidth: Breakpoints.Desktop, value: 15 },
                { minWidth: Breakpoints.Laptop, value: 12 },
              ],
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Location}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: [
                  { minWidth: Breakpoints.Mobile, value: 24 },
                  { minWidth: Breakpoints.Tablet, value: 32 },
                  { minWidth: Breakpoints.Laptop, value: 35 },
                  { minWidth: Breakpoints.BigScreen, value: 40 },
                ],
                width: [
                  { minWidth: Breakpoints.Mobile, value: 24 },
                  { minWidth: Breakpoints.Tablet, value: 32 },
                  { minWidth: Breakpoints.Laptop, value: 35 },
                  { minWidth: Breakpoints.BigScreen, value: 40 },
                ],
              }),
              dimensions.width
            )}
          />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 18 },
                  { minWidth: Breakpoints.Laptop, value: 20 },
                  { minWidth: Breakpoints.Desktop, value: 22 },
                  { minWidth: Breakpoints.BigScreen, value: 24 },
                ],
                marginLeft: 16,
              }),
              dimensions.width
            )}
          >
            {'NYC, 5th Avenue 128'}
          </Text>
        </View>
        {/* Save address */}
        <Button
          onPress={() => {
            try {
              setAddressModal(true);
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
                { minWidth: Breakpoints.BigScreen, value: 24 },
                { minWidth: Breakpoints.Desktop, value: 20 },
                { minWidth: Breakpoints.Laptop, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 20 },
              ],
              height: [
                { minWidth: Breakpoints.Mobile, value: 48 },
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.BigScreen, value: 80 },
              ],
            }),
            dimensions.width
          )}
          title={'Save address'}
        />
      </View>
      {/* Save New Address Modal */}
      <Modal animationType={'none'} transparent={true} visible={AddressModal}>
        <View
          style={StyleSheet.applyWidth(
            { backgroundColor: theme.colors['Strong'], flex: 1, opacity: 0.3 },
            dimensions.width
          )}
        />
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              bottom: 0,
              left: 0,
              padding: 20,
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
            {'Save new address'}
          </Text>
          {/* Title */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 13 },
                    { minWidth: Breakpoints.Tablet, value: 16 },
                    { minWidth: Breakpoints.Laptop, value: 18 },
                    { minWidth: Breakpoints.Desktop, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 22 },
                  ],
                }),
                dimensions.width
              )}
            >
              {'Title'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter address title'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    borderColor: theme.colors['Light'],
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
                    marginTop: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue2}
            />
          </View>
          {/* Address (street, number) */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: [
                  { minWidth: Breakpoints.Mobile, value: 25 },
                  { minWidth: Breakpoints.Tablet, value: 35 },
                  { minWidth: Breakpoints.Laptop, value: 40 },
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
                    { minWidth: Breakpoints.Mobile, value: 13 },
                    { minWidth: Breakpoints.Tablet, value: 16 },
                    { minWidth: Breakpoints.Laptop, value: 18 },
                    { minWidth: Breakpoints.Desktop, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 22 },
                  ],
                }),
                dimensions.width
              )}
            >
              {'Address (street, number)'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              defaultValue={'NYC, 5th Avenue 128'}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  {
                    borderColor: theme.colors['Light'],
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
                    marginTop: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* Save */}
          <Button
            onPress={() => {
              try {
                setAddressModal(false);
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Action button'],
                {
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Desktop, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 24 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.Desktop, value: 70 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 35 },
                    { minWidth: Breakpoints.Laptop, value: 40 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Save'}
          />
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(AddnewaddressScreen);
