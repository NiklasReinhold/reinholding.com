import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';

import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import Main from "./src/Reinholding";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgb(165,210,253)',
  },
});
