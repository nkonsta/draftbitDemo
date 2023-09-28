import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action button': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      height: 48,
      marginTop: 25,
      textAlign: 'center',
    },
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    'action btn big screen': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: [
        { minWidth: Breakpoints.Mobile, value: 16 },
        { minWidth: Breakpoints.BigScreen, value: 24 },
      ],
      height: [
        { minWidth: Breakpoints.Mobile, value: 48 },
        { minWidth: Breakpoints.BigScreen, value: 80 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
    'action btn desktop': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: [
        { minWidth: Breakpoints.Mobile, value: 16 },
        { minWidth: Breakpoints.BigScreen, value: 24 },
        { minWidth: Breakpoints.Desktop, value: 20 },
      ],
      height: [
        { minWidth: Breakpoints.Mobile, value: 48 },
        { minWidth: Breakpoints.BigScreen, value: 80 },
        { minWidth: Breakpoints.Desktop, value: 60 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
    'action btn laptop': {
      backgroundColor: theme.colors.primary,
      borderRadius: 12,
      fontFamily: 'Inter_500Medium',
      fontSize: [
        { minWidth: Breakpoints.Mobile, value: 16 },
        { minWidth: Breakpoints.BigScreen, value: 24 },
        { minWidth: Breakpoints.Desktop, value: 20 },
        { minWidth: Breakpoints.Laptop, value: 20 },
      ],
      height: [
        { minWidth: Breakpoints.Mobile, value: 48 },
        { minWidth: Breakpoints.BigScreen, value: 80 },
        { minWidth: Breakpoints.Desktop, value: 60 },
        { minWidth: Breakpoints.Laptop, value: 60 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
    'action btn tablet': {
      backgroundColor: theme.colors.primary,
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
        { minWidth: Breakpoints.BigScreen, value: 80 },
        { minWidth: Breakpoints.Desktop, value: 60 },
        { minWidth: Breakpoints.Laptop, value: 60 },
        { minWidth: Breakpoints.Tablet, value: 60 },
      ],
      marginTop: 10,
      textAlign: 'center',
    },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({ 'Deck Swiper': { width: '100%' } });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      alignItems: 'center',
      borderWidth: 2,
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const FlashListStyles = theme =>
  StyleSheet.create({ FlashList: { flex: 1 } });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const FlatListStyles = theme => StyleSheet.create({ List: { flex: 1 } });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const ViewStyles = theme =>
  StyleSheet.create({
    Notif_details: {
      backgroundColor: theme.colors['Custom Color'],
      padding: 20,
      paddingTop: 0,
    },
    fd: { marginTop: 20 },
    'header action': {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    'screen header view': {
      alignItems: 'center',
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({ Swiper: { height: 300, width: '100%' } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { color: theme.colors.strong },
    'screen heading mobile': {
      color: theme.colors.strong,
      flex: 1,
      fontFamily: 'Inter_500Medium',
      fontSize: 19,
      textAlign: 'center',
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });
