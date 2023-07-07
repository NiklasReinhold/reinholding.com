import { Canvas, SkPaint, Easing, FitBox, Path, rect, useClockValue, useComputedValue, useLoop, Skia, clamp } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import { prepare, DrawPath, GetRandomEffect } from "./DrawPath";
import { withTiming } from "react-native-reanimated/lib/types/lib/reanimated2/animation";
import { useSharedValue } from "react-native-reanimated";
import { GetPathsByLetter, GetSplitPaths } from "./Path";

const duration = 1500;

export default function Reinholding() {
    //Use a clock to animate the drawing
    const clock = useClockValue();
    if(clock.current > duration) clock.stop();
    const progress = useComputedValue(
        () => clamp(clock.current / duration, 0, 1),
        [clock]
    );

    var letters = GetPathsByLetter();
    var elements = [];

    //Get the effect for the word
    const effect = null;//GetRandomEffect();

    //Iterate through each letter
    for(var indexLetter = 0; indexLetter < letters.length; indexLetter++){
        //Get the color for this letter
        const color = Skia.Color(colors[indexLetter%colors.length]);
        //const color = Skia.Color(GetRandomColor());

        //Iterate through each path in the letter
        for(var indexPath = 0; indexPath < letters[indexLetter].length; indexPath++){
            elements.push(<DrawPath key={`${indexLetter}-${indexPath}`} {...prepare(letters[indexLetter][indexPath])} progress={progress} color={color} effect={effect}/>);
        }    
    }

    return (
        <Canvas style={styles.container}>
            {elements}
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
