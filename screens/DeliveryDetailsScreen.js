import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { MapMarker, MapView } from '@draftbit/maps';
import { Icon, Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const DeliveryDetailsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [expandedDeliveryView, setExpandedDeliveryView] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Main View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            bottom: 0,
            flex: 1,
            justifyContent: 'flex-end',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          },
          dimensions.width
        )}
      >
        <MapView
          apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
          latitude={37.4029}
          loadingEnabled={true}
          longitude={-122.1218}
          rotateEnabled={true}
          scrollEnabled={true}
          showsPointsOfInterest={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.MapViewStyles(theme)['Map View'],
            dimensions.width
          )}
          zoom={20}
          zoomEnabled={true}
        >
          <MapMarker
            latitude={37.4029}
            longitude={-122.1218}
            pinColor={theme.colors['Custom Color_4']}
            title={'Broadway ave 128'}
          />
          <MapMarker
            latitude={37.403}
            longitude={-122.1218}
            pinColor={theme.colors['Custom Color_3']}
            title={'samudra dance creation'}
          />
        </MapView>

        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              bottom: 0,
              left: 0,
              overflow: 'hidden',
              padding: [
                { minWidth: Breakpoints.BigScreen, value: 20 },
                { minWidth: Breakpoints.Desktop, value: 10 },
                { minWidth: Breakpoints.Laptop, value: 8 },
                { minWidth: Breakpoints.Tablet, value: 8 },
              ],
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* Delivery Details Expanded */}
          <>
            {!expandedDeliveryView ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                  },
                  dimensions.width
                )}
              >
                {/* Timeline */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexDirection: 'row',
                      paddingBottom: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Icons */}
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* Restaurant */}
                    <Image
                      resizeMode={'cover'}
                      source={Images.Building}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          {
                            height: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors['Light'],
                          borderStyle: 'dashed',
                          borderWidth: 1,
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 40 },
                            { minWidth: Breakpoints.Tablet, value: 55 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                          marginBottom: 5,
                          marginTop: 5,
                          width: 2,
                        },
                        dimensions.width
                      )}
                    />
                    {/* Arriving */}
                    <Image
                      resizeMode={'cover'}
                      source={Images.Clock}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          {
                            height: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors['Light'],
                          borderStyle: 'dashed',
                          borderWidth: 1,
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 40 },
                            { minWidth: Breakpoints.Tablet, value: 55 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                          marginBottom: 5,
                          marginTop: 5,
                          width: 2,
                        },
                        dimensions.width
                      )}
                    />
                    {/* Address */}
                    <Image
                      resizeMode={'cover'}
                      source={Images.Map}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          {
                            height: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 20 },
                              { minWidth: Breakpoints.Tablet, value: 30 },
                              { minWidth: Breakpoints.BigScreen, value: 45 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    />
                  </View>
                  {/* Details */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: 16 },
                      dimensions.width
                    )}
                  >
                    {/* Restaurant  */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, justifyContent: 'center' },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              color: theme.colors['Medium'],
                              fontFamily: 'Inter_300Light',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 13 },
                                { minWidth: Breakpoints.Laptop, value: 15 },
                                { minWidth: Breakpoints.Desktop, value: 17 },
                                { minWidth: Breakpoints.BigScreen, value: 19 },
                              ],
                              letterSpacing: 0.5,
                              opacity: 0.85,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Restorant:'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              color: theme.colors['Medium'],
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 16 },
                                { minWidth: Breakpoints.Tablet, value: 19 },
                                { minWidth: Breakpoints.Laptop, value: 21 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                                { minWidth: Breakpoints.Desktop, value: 23 },
                              ],
                              marginTop: 2,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'McDonalds'}
                      </Text>
                    </View>
                    {/* Arriving */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flex: 1,
                          justifyContent: 'center',
                          marginBottom: [
                            { minWidth: Breakpoints.Mobile, value: 35 },
                            { minWidth: Breakpoints.Tablet, value: 50 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
                          ],
                          marginTop: [
                            { minWidth: Breakpoints.Mobile, value: 35 },
                            { minWidth: Breakpoints.Tablet, value: 50 },
                            { minWidth: Breakpoints.BigScreen, value: 70 },
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
                              color: theme.colors['Medium'],
                              fontFamily: 'Inter_300Light',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 13 },
                                { minWidth: Breakpoints.Laptop, value: 15 },
                                { minWidth: Breakpoints.Desktop, value: 17 },
                                { minWidth: Breakpoints.BigScreen, value: 19 },
                              ],
                              letterSpacing: 0.5,
                              opacity: 0.85,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Arriving:'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              color: theme.colors['Medium'],
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 16 },
                                { minWidth: Breakpoints.Tablet, value: 19 },
                                { minWidth: Breakpoints.Laptop, value: 21 },
                                { minWidth: Breakpoints.Desktop, value: 23 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              marginTop: 2,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12 min'}
                      </Text>
                    </View>
                    {/* Address */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, justifyContent: 'center' },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              color: theme.colors['Medium'],
                              fontFamily: 'Inter_300Light',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Tablet, value: 13 },
                                { minWidth: Breakpoints.Laptop, value: 15 },
                                { minWidth: Breakpoints.Desktop, value: 17 },
                                { minWidth: Breakpoints.BigScreen, value: 19 },
                              ],
                              letterSpacing: 0.5,
                              opacity: 0.85,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Your address:'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              color: theme.colors['Medium'],
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 16 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                                { minWidth: Breakpoints.Desktop, value: 23 },
                                { minWidth: Breakpoints.Laptop, value: 21 },
                                { minWidth: Breakpoints.Tablet, value: 19 },
                              ],
                              marginTop: 2,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Broadway ave 128'}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Minimize the details pop up */}
                <View>
                  <Pressable
                    onPress={() => {
                      try {
                        setExpandedDeliveryView(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
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
                            { minWidth: Breakpoints.Mobile, value: 48 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                          justifyContent: 'center',
                          width: [
                            { minWidth: Breakpoints.Mobile, value: 48 },
                            { minWidth: Breakpoints.Tablet, value: 60 },
                            { minWidth: Breakpoints.Laptop, value: 65 },
                            { minWidth: Breakpoints.Desktop, value: 70 },
                            { minWidth: Breakpoints.BigScreen, value: 80 },
                          ],
                        },
                        dimensions.width
                      )}
                    >
                      <Icon name={'FontAwesome/angle-down'} size={24} />
                    </View>
                  </Pressable>
                </View>
              </View>
            )}
          </>
          {/* Delivery Details short */}
          <>
            {expandedDeliveryView ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: [
                      { minWidth: Breakpoints.Mobile, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 20 },
                    ],
                  },
                  dimensions.width
                )}
              >
                {/* Arriving */}
                <View>
                  {/* Arrving */}
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['Medium'],
                          fontFamily: 'Inter_300Light',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 10 },
                            { minWidth: Breakpoints.Tablet, value: 13 },
                            { minWidth: Breakpoints.Laptop, value: 15 },
                            { minWidth: Breakpoints.Desktop, value: 17 },
                            { minWidth: Breakpoints.BigScreen, value: 19 },
                          ],
                          letterSpacing: 0.5,
                          opacity: 0.85,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Arriving:'}
                  </Text>
                  {/* Time */}
                  <Text
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: [
                            { minWidth: Breakpoints.Mobile, value: 19 },
                            { minWidth: Breakpoints.Tablet, value: 22 },
                            { minWidth: Breakpoints.Laptop, value: 24 },
                            { minWidth: Breakpoints.Desktop, value: 26 },
                            { minWidth: Breakpoints.BigScreen, value: 28 },
                          ],
                          marginTop: 2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'12 min'}
                  </Text>
                </View>
                {/* Details */}
                <Pressable
                  onPress={() => {
                    try {
                      setExpandedDeliveryView(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Light'],
                        borderRadius: [
                          { minWidth: Breakpoints.Mobile, value: 6 },
                          { minWidth: Breakpoints.BigScreen, value: 10 },
                          { minWidth: Breakpoints.Laptop, value: 8 },
                          { minWidth: Breakpoints.Desktop, value: 9 },
                          { minWidth: Breakpoints.Tablet, value: 7 },
                        ],
                        borderWidth: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingBottom: [
                          { minWidth: Breakpoints.Mobile, value: 4 },
                          { minWidth: Breakpoints.Tablet, value: 7 },
                          { minWidth: Breakpoints.Laptop, value: 10 },
                          { minWidth: Breakpoints.BigScreen, value: 16 },
                        ],
                        paddingLeft: [
                          { minWidth: Breakpoints.Mobile, value: 12 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Laptop, value: 20 },
                          { minWidth: Breakpoints.BigScreen, value: 30 },
                        ],
                        paddingRight: [
                          { minWidth: Breakpoints.Mobile, value: 12 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Laptop, value: 20 },
                          { minWidth: Breakpoints.BigScreen, value: 30 },
                        ],
                        paddingTop: [
                          { minWidth: Breakpoints.Mobile, value: 4 },
                          { minWidth: Breakpoints.Tablet, value: 7 },
                          { minWidth: Breakpoints.Laptop, value: 10 },
                          { minWidth: Breakpoints.BigScreen, value: 16 },
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
                            fontFamily: 'Inter_400Regular',
                            fontSize: [
                              { minWidth: Breakpoints.Tablet, value: 17 },
                              { minWidth: Breakpoints.Laptop, value: 19 },
                              { minWidth: Breakpoints.Desktop, value: 21 },
                              { minWidth: Breakpoints.BigScreen, value: 23 },
                            ],
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Details'}
                    </Text>
                    <Icon
                      name={'Entypo/chevron-small-up'}
                      size={24}
                      style={StyleSheet.applyWidth(
                        { marginLeft: 6 },
                        dimensions.width
                      )}
                    />
                  </View>
                </Pressable>
              </View>
            )}
          </>
          {/* Delivery Partner */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                padding: 20,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Avatar}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  borderRadius: [
                    { minWidth: Breakpoints.Mobile, value: 24 },
                    { minWidth: Breakpoints.Tablet, value: 33 },
                    { minWidth: Breakpoints.Laptop, value: 40 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                    { minWidth: Breakpoints.BigScreen, value: 70 },
                  ],
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 66 },
                    { minWidth: Breakpoints.Laptop, value: 80 },
                    { minWidth: Breakpoints.BigScreen, value: 140 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 66 },
                    { minWidth: Breakpoints.Laptop, value: 80 },
                    { minWidth: Breakpoints.BigScreen, value: 140 },
                  ],
                }),
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
                {'Mina Klein'}
              </Text>
              {/* Rating */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', marginTop: 4 },
                  dimensions.width
                )}
              >
                <Icon
                  name={'FontAwesome/star'}
                  size={16}
                  style={StyleSheet.applyWidth(
                    { marginRight: 5 },
                    dimensions.width
                  )}
                />
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
                  {'4.8'}
                </Text>
              </View>
            </View>
            {/* Actions */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              {/* Chat */}
              <Pressable>
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_2'],
                      borderRadius: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.BigScreen, value: 50 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                      justifyContent: 'center',
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color']}
                    name={'Ionicons/md-chatbox-ellipses-outline'}
                    size={20}
                  />
                </View>
              </Pressable>
              {/* Call */}
              <Pressable
                style={StyleSheet.applyWidth(
                  {
                    marginLeft: [
                      { minWidth: Breakpoints.Mobile, value: 12 },
                      { minWidth: Breakpoints.Tablet, value: 20 },
                      { minWidth: Breakpoints.BigScreen, value: 35 },
                    ],
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: [
                        { minWidth: Breakpoints.Mobile, value: 20 },
                        { minWidth: Breakpoints.Tablet, value: 30 },
                        { minWidth: Breakpoints.BigScreen, value: 50 },
                      ],
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                      justifyContent: 'center',
                      width: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 60 },
                        { minWidth: Breakpoints.BigScreen, value: 100 },
                      ],
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color']}
                    name={'Feather/phone-call'}
                    size={20}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      {/* back */}
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
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 24,
                height: [
                  { minWidth: Breakpoints.Tablet, value: 60 },
                  { minWidth: Breakpoints.Desktop, value: 70 },
                  { minWidth: Breakpoints.BigScreen, value: 80 },
                ],
                marginLeft: 10,
                marginTop: 10,
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
    </ScreenContainer>
  );
};

export default withTheme(DeliveryDetailsScreen);
