/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    loginBackground:'#9ea3b0',
    richBlack: '#0d1f2d',
    paynesGray: '#546a7b',
    cadetGray: '#9ea3b0',
    mistyRose: '#fae1df',
    pale:'#efd2c6',
    sand:'#e4c3ad'
    //refer link color combo: https://coolors.co/0d1f2d-546a7b-9ea3b0-fae1df-efd2c6-e4c3ad

  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
