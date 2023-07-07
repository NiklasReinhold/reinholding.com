import { Canvas, Easing, useLoop, Circle, Fill, Glyphs, Group, ImageSVG, Skia, TextBlob, TextPath, fitbox, rect, useFont, useSVG, vec } from "@shopify/react-native-skia";
import { StyleSheet, useWindowDimensions } from 'react-native';
import { prepare, GradientAlongPath } from "./PathAlongGradient";

const hello = prepare(
    "M 0 75.101 L 0 3.001 A 3.713 3.713 0 0 1 0.11 2.072 A 2.596 2.596 0 0 1 0.85 0.801 Q 1.7 0.001 3 0.001 L 22.1 0.001 A 29.756 29.756 0 0 1 29.341 0.849 A 24.463 24.463 0 0 1 35.05 3.051 Q 40.7 6.101 43.9 11.401 Q 47.1 16.701 47.1 23.701 A 24.642 24.642 0 0 1 46.059 30.969 A 21.546 21.546 0 0 1 43.9 35.801 Q 40.7 41.101 35.05 44.101 Q 29.4 47.101 22.1 47.101 L 6 47.101 L 6 75.101 A 3.463 3.463 0 0 1 5.848 76.148 A 2.835 2.835 0 0 1 5.2 77.251 A 2.635 2.635 0 0 1 3.75 78.031 A 3.872 3.872 0 0 1 3 78.101 A 3.256 3.256 0 0 1 1.917 77.927 A 2.806 2.806 0 0 1 0.85 77.251 A 2.871 2.871 0 0 1 0.005 75.303 A 3.82 3.82 0 0 1 0 75.101 Z M 6 6.001 L 6 41.101 L 22.1 41.101 A 23.617 23.617 0 0 0 27.324 40.547 A 18.628 18.628 0 0 0 31.95 38.851 Q 36.2 36.601 38.65 32.701 A 16.027 16.027 0 0 0 41.014 25.571 A 19.93 19.93 0 0 0 41.1 23.701 A 18.757 18.757 0 0 0 40.367 18.372 A 16.092 16.092 0 0 0 38.65 14.501 Q 36.2 10.501 31.95 8.251 A 19.155 19.155 0 0 0 25.791 6.266 A 24.769 24.769 0 0 0 22.1 6.001 L 6 6.001 Z M 42.3 76.501 L 22.4 44.701 L 28.6 43.301 L 47.5 73.501 A 6.937 6.937 0 0 1 47.917 74.229 Q 48.659 75.745 48.05 76.801 A 2.324 2.324 0 0 1 46.871 77.793 Q 46.448 77.966 45.909 78.042 A 6.551 6.551 0 0 1 45 78.101 A 4.294 4.294 0 0 1 44.395 78.061 Q 44.087 78.017 43.838 77.924 A 1.703 1.703 0 0 1 43.35 77.651 A 5.192 5.192 0 0 1 42.764 77.084 A 6.939 6.939 0 0 1 42.3 76.501 Z"
  );

  
export default function Reinholding() {
    const progress = useLoop({
        duration: 3000,
        easing: Easing.inOut(Easing.ease),
      });

    const svg = useSVG(require("../assets/Reinholding.svg"));
    const { width, height } = useWindowDimensions();

    return (
        <Canvas style={{ flex: 1 }}>
            <Fill color="black" />
            <GradientAlongPath {...hello} progress={progress} />
        </Canvas>
    );
}

const styles = StyleSheet.create({
    
});
