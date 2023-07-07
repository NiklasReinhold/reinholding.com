import { Canvas, SkPaint, Easing, FitBox, Path, rect, useClockValue, useComputedValue, useLoop, Skia, clamp } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import { prepare, DrawPath, GetRandomEffect } from "./DrawPath";
import { withTiming } from "react-native-reanimated/lib/types/lib/reanimated2/animation";
import { useSharedValue } from "react-native-reanimated";
import { GetPathsByLetter, GetSplitPaths } from "./Path";

const duration = 1500;

export default function Reinholding() {
    const clock = useClockValue();
    if(clock.current > duration) clock.stop();

    const progress = useComputedValue(
        () => clamp(clock.current / duration, 0, 1),
        [clock]
    );

    const effect = GetRandomEffect();

    var paths = splitPath();
    var gradient_paths = [];
    for(var i = 0; i < paths.length; i++){
        gradient_paths.push(<DrawPath key={i} {...prepare(paths[i])} progress={progress} color={Skia.Color("black")} effect={effect}/>);
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

const colors = [
    "#3FCEBC",
    "#3CBCEB",
    "#5F96E7",
    "#816FE3",
    "#9F5EE2",
    "#BD4CE0",
    "#DE589F",
    "#FF645E",
    "#FDA859",
    "#FAEC54",
    "#9EE671",
];
const GetRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
