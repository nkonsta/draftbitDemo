import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
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

const RestaurantDetailsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: [
              { minWidth: Breakpoints.Mobile, value: 50 },
              { minWidth: Breakpoints.Tablet, value: 65 },
              { minWidth: Breakpoints.Laptop, value: 75 },
              { minWidth: Breakpoints.Desktop, value: 85 },
              { minWidth: Breakpoints.BigScreen, value: 90 },
            ],
            marginRight: 48,
            paddingLeft: 10,
            paddingRight: 10,
          },
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
              {
                alignItems: 'center',
                height: [
                  { minWidth: Breakpoints.Mobile, value: 48 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                justifyContent: 'center',
                width: [
                  { minWidth: Breakpoints.Mobile, value: 48 },
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
              },
              dimensions.width
            )}
          >
            <Icon name={'Entypo/chevron-thin-left'} size={20} />
          </View>
        </Pressable>
        {/* Restaurant name */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              flex: 1,
              fontFamily: 'Inter_500Medium',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 19 },
                { minWidth: Breakpoints.Laptop, value: 25 },
                { minWidth: Breakpoints.BigScreen, value: 29 },
                { minWidth: Breakpoints.Desktop, value: 30 },
                { minWidth: Breakpoints.Tablet, value: 22 },
              ],
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'McDonalds'}
        </Text>
      </View>
      {/* Food Items */}
      <ExampleDataApi.FetchFoodItemsGET>
        {({ loading, error, data, refetchFoodItems }) => {
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
              listKey={'ly3oKy9D'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <Pressable
                    onPress={() => {
                      try {
                        navigation.navigate('ItemDetailsScreen');
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
                          paddingBottom: [
                            { minWidth: Breakpoints.Mobile, value: 15 },
                            { minWidth: Breakpoints.Tablet, value: 20 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                          paddingTop: [
                            { minWidth: Breakpoints.Mobile, value: 15 },
                            { minWidth: Breakpoints.Tablet, value: 20 },
                            { minWidth: Breakpoints.BigScreen, value: 25 },
                          ],
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${flashListData?.URL}` }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            {
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 70 },
                                { minWidth: Breakpoints.Tablet, value: 91 },
                                { minWidth: Breakpoints.Laptop, value: 98 },
                                { minWidth: Breakpoints.BigScreen, value: 112 },
                              ],
                              width: [
                                { minWidth: Breakpoints.Mobile, value: 88 },
                                { minWidth: Breakpoints.Tablet, value: 114 },
                                { minWidth: Breakpoints.Laptop, value: 123 },
                                { minWidth: Breakpoints.BigScreen, value: 141 },
                              ],
                            }
                          ),
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
                          {flashListData?.name}
                        </Text>
                        {/* Details */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Light'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 13 },
                                  { minWidth: Breakpoints.Tablet, value: 16 },
                                  { minWidth: Breakpoints.Laptop, value: 18 },
                                  { minWidth: Breakpoints.Desktop, value: 20 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 22,
                                  },
                                ],
                                marginTop: [
                                  { minWidth: Breakpoints.Mobile, value: 4 },
                                  { minWidth: Breakpoints.Tablet, value: 7 },
                                  { minWidth: Breakpoints.Laptop, value: 9 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 11,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {flashListData?.description}
                        </Text>
                        {/* price */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Custom Color_4'],
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: [
                                  { minWidth: Breakpoints.Tablet, value: 17 },
                                  { minWidth: Breakpoints.Laptop, value: 19 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 21,
                                  },
                                ],
                                marginTop: [
                                  { minWidth: Breakpoints.Mobile, value: 6 },
                                  { minWidth: Breakpoints.Tablet, value: 8 },
                                  { minWidth: Breakpoints.Laptop, value: 10 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 12,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'$'}
                          {flashListData?.Price}
                          {'0'}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </ExampleDataApi.FetchFoodItemsGET>
    </ScreenContainer>
  );
};

export default withTheme(RestaurantDetailsScreen);
