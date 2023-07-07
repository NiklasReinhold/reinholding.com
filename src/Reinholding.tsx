import { Canvas, SkPaint, Easing, FitBox, Path, rect, useClockValue, useComputedValue, useLoop, Skia } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import { prepare, GradientAlongPath } from "./PathAlongGradient";
import { withTiming } from "react-native-reanimated/lib/types/lib/reanimated2/animation";
import { useSharedValue } from "react-native-reanimated";
import { splitPath } from "./Path";

export default function Reinholding() {
    const clock = useClockValue();
    const progress = useComputedValue(
        () => clock.current / 1500,
        [clock]
    );
    if(clock.current > 1000) clock.stop();

    var paths = splitPath();
    var gradient_paths = [];
    for(var i = 0; i < paths.length; i++){
            
        gradient_paths.push(<GradientAlongPath key={i} {...prepare(paths[i])} progress={progress} color={Skia.Color("black")}/>);
    }

    return (
        <Canvas style={styles.container}>
            {gradient_paths}
        </Canvas>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
});
