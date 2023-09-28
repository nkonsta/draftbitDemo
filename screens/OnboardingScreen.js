import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
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
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const OnboardingScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [LangaugeModal, setLangaugeModal] = React.useState(false);
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState(1);
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');
  const [selectedLanguageFlag, setSelectedLanguageFlag] = React.useState(
    'https://res.cloudinary.com/altos/image/upload/v1677696521/example-data/FoodOrderingApp/Languages/English.png'
  );

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Primary'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['screen header view'],
            {
              height: [
                { minWidth: Breakpoints.Tablet, value: 60 },
                { minWidth: Breakpoints.Laptop, value: 65 },
                { minWidth: Breakpoints.Desktop, value: 70 },
                { minWidth: Breakpoints.BigScreen, value: 100 },
              ],
              justifyContent: 'flex-end',
            }
          ),
          dimensions.width
        )}
      >
        {/* Skip */}
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('WelcomeScreen');
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
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.Desktop, value: 70 },
                    { minWidth: Breakpoints.BigScreen, value: 100 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.Desktop, value: 70 },
                    { minWidth: Breakpoints.BigScreen, value: 100 },
                  ],
                }
              ),
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 16 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Desktop, value: 24 },
                    { minWidth: Breakpoints.BigScreen, value: 32 },
                  ],
                }),
                dimensions.width
              )}
            >
              {'Skip'}
            </Text>
          </View>
        </Pressable>
      </View>
      {/* Top View */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flex: 1, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Onboarding}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              height: [
                { minWidth: Breakpoints.Mobile, value: 270 },
                { minWidth: Breakpoints.Tablet, value: 472 },
                { minWidth: Breakpoints.Desktop, value: 540 },
                { minWidth: Breakpoints.BigScreen, value: 810 },
              ],
              width: [
                { minWidth: Breakpoints.Mobile, value: 253 },
                { minWidth: Breakpoints.Tablet, value: 442 },
                { minWidth: Breakpoints.Desktop, value: 506 },
                { minWidth: Breakpoints.BigScreen, value: 759 },
              ],
            }),
            dimensions.width
          )}
        />
      </View>
      {/* Bottom View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            justifyContent: 'space-between',
            marginLeft: { minWidth: Breakpoints.Laptop, value: '20%' },
            marginRight: { minWidth: Breakpoints.Laptop, value: '20%' },
            padding: [
              { minWidth: Breakpoints.Mobile, value: 20 },
              { minWidth: Breakpoints.Tablet, value: 40 },
              { minWidth: Breakpoints.BigScreen, value: 55 },
            ],
            paddingBottom: 25,
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'Inter_600SemiBold',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 25 },
                { minWidth: Breakpoints.Tablet, value: 29 },
                { minWidth: Breakpoints.BigScreen, value: 33 },
              ],
              lineHeight: [
                { minWidth: Breakpoints.Mobile, value: 40 },
                { minWidth: Breakpoints.Tablet, value: 45 },
                { minWidth: Breakpoints.BigScreen, value: 49 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Let’s explore \nthe delicious foods \n😛'}
        </Text>

        <Pressable
          onPress={() => {
            try {
              setLangaugeModal(true);
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
                  { minWidth: Breakpoints.Mobile, value: 40 },
                  { minWidth: Breakpoints.Tablet, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 100 },
                ],
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={{ uri: `${selectedLanguageFlag}` }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  borderRadius: [
                    { minWidth: Breakpoints.Mobile, value: 10 },
                    { minWidth: Breakpoints.Tablet, value: 17 },
                    { minWidth: Breakpoints.BigScreen, value: 21 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 20 },
                    { minWidth: Breakpoints.Tablet, value: 34 },
                    { minWidth: Breakpoints.BigScreen, value: 42 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 20 },
                    { minWidth: Breakpoints.Tablet, value: 34 },
                    { minWidth: Breakpoints.BigScreen, value: 42 },
                  ],
                }),
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 16 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 25 },
                  ],
                  paddingLeft: [
                    { minWidth: Breakpoints.Mobile, value: 10 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 20 },
                  ],
                  paddingRight: [
                    { minWidth: Breakpoints.Mobile, value: 8 },
                    { minWidth: Breakpoints.Tablet, value: 15 },
                    { minWidth: Breakpoints.BigScreen, value: 20 },
                  ],
                }),
                dimensions.width
              )}
            >
              {selectedLanguage}
            </Text>
            <Icon name={'Entypo/chevron-small-down'} size={24} />
          </View>
        </Pressable>
        {/* Next */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('WelcomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Action button'],
              {
                borderRadius: { minWidth: Breakpoints.Laptop, value: 18 },
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 20 },
                  { minWidth: Breakpoints.BigScreen, value: 24 },
                ],
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.BigScreen, value: 70 },
                ],
              }
            ),
            dimensions.width
          )}
          title={'Next'}
        />
      </View>
      {/* Language Modal */}
      <Modal animationType={'none'} transparent={true} visible={LangaugeModal}>
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              bottom: 0,
              left: 0,
              marginLeft: { minWidth: Breakpoints.Laptop, value: '20%' },
              marginRight: { minWidth: Breakpoints.Laptop, value: '20%' },
              padding: 20,
              paddingBottom: 35,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Inter_600SemiBold',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 30 },
                ],
                lineHeight: [
                  { minWidth: Breakpoints.Mobile, value: 40 },
                  { minWidth: Breakpoints.BigScreen, value: 45 },
                ],
                marginBottom: 30,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'App language'}
          </Text>

          <RadioButtonGroup
            onValueChange={newRadioButtonGroupValue => {
              const radioButtonGroupValue = newRadioButtonGroupValue;
              try {
                setRadioButtonGroupValue(newRadioButtonGroupValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={radioButtonGroupValue}
          >
            <ExampleDataApi.FetchLanguagesGET>
              {({ loading, error, data, refetchLanguages }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <FlashList
                    data={fetchData}
                    estimatedItemSize={50}
                    keyExtractor={flashListData =>
                      flashListData?.id ||
                      flashListData?.uuid ||
                      JSON.stringify(flashListData)
                    }
                    listKey={'2F9jGknh'}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item }) => {
                      const flashListData = item;
                      return (
                        <>
                          {/* Language */}
                          <Pressable
                            onPress={() => {
                              try {
                                setSelectedLanguage(flashListData?.Name);
                                setSelectedLanguageFlag(flashListData?.Flag);
                                setLangaugeModal(false);
                                setRadioButtonGroupValue(flashListData?.id);
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
                                  justifyContent: 'space-between',
                                  marginBottom: [
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 12,
                                    },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 10,
                                    },
                                  ],
                                },
                                dimensions.width
                              )}
                            >
                              {/* Flag Image */}
                              <Image
                                resizeMode={'cover'}
                                source={{ uri: `${flashListData?.Flag}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image'],
                                    {
                                      height: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 22,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 33,
                                        },
                                      ],
                                      width: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 32,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 48,
                                        },
                                      ],
                                    }
                                  ),
                                  dimensions.width
                                )}
                              />
                              {/* Language */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginLeft: 10,
                                    padding: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text'],
                                      {
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 16,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 25,
                                          },
                                          {
                                            minWidth: Breakpoints.Laptop,
                                            value: 19,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 22,
                                          },
                                        ],
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {flashListData?.Name}
                                </Text>
                                <RadioButton
                                  color={theme.colors['Custom Color_3']}
                                  onPress={() => {
                                    try {
                                      setRadioButtonGroupValue(
                                        flashListData?.Name
                                      );
                                      setSelectedLanguage(flashListData?.Name);
                                      setSelectedLanguageFlag(
                                        flashListData?.Flag
                                      );
                                      setLangaugeModal(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  selectedIcon={
                                    'MaterialIcons/radio-button-checked'
                                  }
                                  size={24}
                                  unselectedColor={theme.colors['Custom Color']}
                                  unselectedIcon={
                                    'MaterialIcons/radio-button-unchecked'
                                  }
                                  value={flashListData?.id}
                                />
                              </View>
                            </View>
                          </Pressable>
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                );
              }}
            </ExampleDataApi.FetchLanguagesGET>
          </RadioButtonGroup>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingScreen);
