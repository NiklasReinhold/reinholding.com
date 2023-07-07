import { Canvas, Circle, Text } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import Breathe from "./Breathe";
import Reinholding from "./Reinholding";

export default function Main() {
    return (
        <Canvas style={styles.container}>
            <Reinholding />
        </Canvas>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});
