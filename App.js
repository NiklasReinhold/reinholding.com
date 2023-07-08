import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';

import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export default function App() {
  return (
    <View style={styles.container}>
      <WithSkiaWeb
        getComponent={() => import('./src/Main')}
        fallback={<Text style={{ textAlign: 'center', color:'black' }}>Loading...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ebf9fa',
  },
});
