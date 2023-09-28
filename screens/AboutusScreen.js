import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
import { ScrollView, Text, View, useWindowDimensions } from 'react-native';

const AboutusScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');

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
        {/* Screen heading */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['screen heading mobile'],
              {
                fontSize: [
                  { minWidth: Breakpoints.Tablet, value: 22 },
                  { minWidth: Breakpoints.Laptop, value: 25 },
                  { minWidth: Breakpoints.Desktop, value: 28 },
                  { minWidth: Breakpoints.BigScreen, value: 30 },
                ],
              }
            ),
            dimensions.width
          )}
        >
          {'About us'}
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
              backgroundColor: theme.colors['Custom Color'],
              flex: 1,
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 40 },
              ],
              paddingTop: 0,
            },
            dimensions.width
          )}
        >
          {/* Version */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            {/* ~ version number */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 18 },
                    { minWidth: Breakpoints.Tablet, value: 21 },
                    { minWidth: Breakpoints.Desktop, value: 24 },
                    { minWidth: Breakpoints.BigScreen, value: 26 },
                  ],
                  marginTop: 20,
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {'1.9.4'}
            </Text>
            {/* label */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Custom Color_6'],
                  fontFamily: 'Inter_300Light',
                  fontSize: [
                    { minWidth: Breakpoints.Tablet, value: 17 },
                    { minWidth: Breakpoints.Desktop, value: 20 },
                    { minWidth: Breakpoints.BigScreen, value: 22 },
                  ],
                  lineHeight: 25,
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 2 },
                    { minWidth: Breakpoints.Desktop, value: 8 },
                    { minWidth: Breakpoints.BigScreen, value: 12 },
                  ],
                  opacity: 0.85,
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {'Current version'}
            </Text>
          </View>
          {/* short about us */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: { minWidth: Breakpoints.Tablet, value: 25 } },
              dimensions.width
            )}
          >
            {/* title */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 21 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 32 },
                  ],
                  marginTop: 20,
                }),
                dimensions.width
              )}
            >
              {'Short about us'}
            </Text>
            {/* details */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Custom Color_5'],
                  fontFamily: 'Inter_300Light',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 17 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Desktop, value: 26 },
                    { minWidth: Breakpoints.BigScreen, value: 28 },
                  ],
                  letterSpacing: 0.3,
                  lineHeight: [
                    { minWidth: Breakpoints.Mobile, value: 25 },
                    { minWidth: Breakpoints.Tablet, value: 28 },
                    { minWidth: Breakpoints.Desktop, value: 32 },
                    { minWidth: Breakpoints.BigScreen, value: 34 },
                  ],
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 8 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                  ],
                  opacity: 0.8,
                  textAlign: 'left',
                }),
                dimensions.width
              )}
            >
              {
                'Bibendum sit eu morbi velit praesent. Fermentum mauris fringilla vitae feugiat vel sit blandit quam. In mi sodales nisl eleifend duis porttitor. Convallis euismod facilisis neque eget praesent diam in nulla. Faucibus interdum vulputate rhoncus mauris id facilisis est nunc habitant. Velit posuere facilisi tortor sed. '
              }
            </Text>
          </View>
          {/* Vision */}
          <View>
            {/* title */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 21 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 32 },
                  ],
                  marginTop: 20,
                }),
                dimensions.width
              )}
            >
              {'Vision'}
            </Text>
            {/* details */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Custom Color_5'],
                  fontFamily: 'Inter_300Light',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 17 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Desktop, value: 26 },
                    { minWidth: Breakpoints.BigScreen, value: 28 },
                  ],
                  letterSpacing: 0.3,
                  lineHeight: [
                    { minWidth: Breakpoints.Mobile, value: 25 },
                    { minWidth: Breakpoints.Tablet, value: 28 },
                    { minWidth: Breakpoints.Desktop, value: 32 },
                    { minWidth: Breakpoints.BigScreen, value: 34 },
                  ],
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 8 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                  ],
                  opacity: 0.8,
                  textAlign: 'left',
                }),
                dimensions.width
              )}
            >
              {
                'Lectus a velit sed pretium egestas integer lacus, mi. Risus eget venenatis at amet sed. Fames rhoncus purus ornare nulla. Lorem dolor eget sagittis mattis eget nam. Nulla nisi egestas nisl nibh eleifend luctus.'
              }
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AboutusScreen);
