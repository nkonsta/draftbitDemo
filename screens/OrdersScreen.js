import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const OrdersScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Screen heading */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            fontFamily: 'Inter_500Medium',
            fontSize: [
              { minWidth: Breakpoints.Tablet, value: 22 },
              { minWidth: Breakpoints.Laptop, value: 25 },
              { minWidth: Breakpoints.Desktop, value: 28 },
              { minWidth: Breakpoints.BigScreen, value: 30 },
              { minWidth: Breakpoints.Mobile, value: 19 },
            ],
            lineHeight: [
              { minWidth: Breakpoints.Mobile, value: 50 },
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 75 },
              { minWidth: Breakpoints.Desktop, value: 85 },
              { minWidth: Breakpoints.BigScreen, value: 90 },
            ],
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Orders'}
      </Text>

      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: { minWidth: Breakpoints.Tablet, value: 'row' },
            flexWrap: { minWidth: Breakpoints.Tablet, value: 'nowrap' },
          },
          dimensions.width
        )}
      >
        {/* Current Order */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 25,
              width: { minWidth: Breakpoints.Tablet, value: '50%' },
            },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Medium'],
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Desktop, value: 21 },
                ],
                marginBottom: 8,
                marginLeft: 20,
                opacity: 0.6,
              }),
              dimensions.width
            )}
          >
            {'Current order'}
          </Text>
          {/* Food Items */}
          <ExampleDataApi.FetchUsersGET count={1}>
            {({ loading, error, data, refetchUsers }) => {
              const foodItemsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={foodItemsData}
                  estimatedItemSize={50}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'F6gqm4Ue'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Pressable
                        onPress={() => {
                          try {
                            navigation.navigate('DeliveryDetailsScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 2,
                              borderColor: theme.colors['Divider'],
                              flexDirection: 'row',
                              marginLeft: 20,
                              marginRight: 20,
                              paddingBottom: 15,
                              paddingTop: 15,
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            source={Images.Burger}
                            style={StyleSheet.applyWidth(
                              {
                                borderRadius: 8,
                                height: [
                                  { minWidth: Breakpoints.Mobile, value: 64 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 100,
                                  },
                                ],
                                width: [
                                  { minWidth: Breakpoints.Desktop, value: 100 },
                                  { minWidth: Breakpoints.Tablet, value: 80 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 125,
                                  },
                                  { minWidth: Breakpoints.Mobile, value: 100 },
                                  { minWidth: Breakpoints.Laptop, value: 100 },
                                ],
                              },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, paddingLeft: 16 },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 16,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 21,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 23,
                                      },
                                    ],
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'McDonalds-Combo menu'}
                            </Text>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: 8,
                                  paddingTop: 5,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Price */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 19,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 21,
                                        },
                                      ],
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'$34.60'}
                              </Text>
                              {/* Status */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  source={Images.Moped}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['Image'],
                                      {
                                        height: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 20,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 30,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 32,
                                          },
                                        ],
                                        width: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 20,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 30,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 32,
                                          },
                                        ],
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                />
                                <Text
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text'],
                                      {
                                        color: theme.colors['Custom Color_3'],
                                        fontFamily: 'Inter_500Medium',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Mobile,
                                            value: 13,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 18,
                                          },
                                          {
                                            minWidth: Breakpoints.BigScreen,
                                            value: 20,
                                          },
                                        ],
                                        marginLeft: 5,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'On the way'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Pressable>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.FlashListStyles(theme)['FlashList'],
                    dimensions.width,
                    ['width', 'height', 'flexGrow']
                  )}
                  contentContainerStyle={StyleSheet.applyWidth(
                    GlobalStyles.FlashListStyles(theme)['FlashList'],
                    dimensions.width
                  )}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Past orders */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: {
                minWidth: Breakpoints.Tablet,
                value: theme.colors['Divider'],
              },
              borderLeftWidth: { minWidth: Breakpoints.Tablet, value: 1 },
              flex: 1,
              marginTop: 25,
            },
            dimensions.width
          )}
        >
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Medium'],
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Desktop, value: 21 },
                ],
                marginBottom: 8,
                marginLeft: 20,
                opacity: 0.6,
              }),
              dimensions.width
            )}
          >
            {'Past orders'}
          </Text>
          {/* Food Items */}
          <ExampleDataApi.FetchUsersGET count={6}>
            {({ loading, error, data, refetchUsers }) => {
              const foodItemsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={foodItemsData}
                  estimatedItemSize={50}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  listKey={'87NikfNA'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Pressable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 2,
                              borderColor: theme.colors['Divider'],
                              flexDirection: 'row',
                              marginLeft: 20,
                              marginRight: 20,
                              paddingBottom: [
                                { minWidth: Breakpoints.Mobile, value: 15 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              paddingTop: [
                                { minWidth: Breakpoints.Mobile, value: 15 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            source={Images.Burger}
                            style={StyleSheet.applyWidth(
                              {
                                borderRadius: 8,
                                height: [
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 100,
                                  },
                                  { minWidth: Breakpoints.Mobile, value: 64 },
                                ],
                                width: [
                                  { minWidth: Breakpoints.Desktop, value: 100 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 125,
                                  },
                                  { minWidth: Breakpoints.Tablet, value: 100 },
                                  { minWidth: Breakpoints.Mobile, value: 100 },
                                ],
                              },
                              dimensions.width
                            )}
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, paddingLeft: 16 },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 16,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 21,
                                      },
                                      {
                                        minWidth: Breakpoints.BigScreen,
                                        value: 23,
                                      },
                                    ],
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Sushi japonico'}
                            </Text>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginTop: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Price */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 19,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 21,
                                        },
                                      ],
                                      marginTop: 6,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'$22.00'}
                              </Text>
                              {/* Status */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: theme.colors['Light'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 13,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 18,
                                        },
                                        {
                                          minWidth: Breakpoints.BigScreen,
                                          value: 20,
                                        },
                                      ],
                                      marginTop: 4,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Delivered'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Pressable>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.FlashListStyles(theme)['FlashList'],
                    dimensions.width,
                    ['width', 'height', 'flexGrow']
                  )}
                  contentContainerStyle={StyleSheet.applyWidth(
                    GlobalStyles.FlashListStyles(theme)['FlashList'],
                    dimensions.width
                  )}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OrdersScreen);
