import { useClockValue, useComputedValue, Skia, clamp, useValue, Group } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';
import { prepare, DrawPath } from "./DrawPath";
import { GetPathsByLetter } from "./Path";
import { GetRandomEffect } from "./Effects";

const duration = 1500;
const duration_break = 500;

export default function Reinholding() {
    var fade_iteration = useValue(0);
    var fade_trigger = false;

    const clock = useClockValue();
    //Do a fade in, break, fade out, break
    var progress = useComputedValue(
        () => {
            var time = clock.current % (duration * 2 + duration_break * 2);
        
            if(time < duration + duration_break){
                if(fade_trigger){
                    fade_trigger = false;
                    fade_iteration.current++;
                }
                //Fade in and break by clamp
                return clamp(time / duration, 0, 1)
            }else{
                fade_trigger = true;
                //Fade out and break by clamp
                return 1 - clamp((time-duration-duration_break) / duration, 0, 1)
            }
        },
        [clock]
    );

    //Get the effect for the word
    var effect = useComputedValue(
        () => {
            return fade_iteration.current == 0 ? null : GetRandomEffect();
        },
        [fade_iteration]
    )

    var letters = GetPathsByLetter();
    var elements = [];

    //Iterate through each letter
    for(var indexLetter = 0; indexLetter < letters.length; indexLetter++){
        //Make a constant copy for the animation
        const index = indexLetter;
        //Get the color for this letter
        var color = useComputedValue(
            () => {
                //pay attention that the index does not get negative when subtaction fade_iteration.current
                if(fade_iteration.current == 0) 
                    return Skia.Color('#000000');

                const shift = fade_iteration.current % colors.length; 
                return Skia.Color(colors[(index - shift + colors.length)%colors.length]);
            },
            [fade_iteration]
        ) 

        //Iterate through each path in the letter
        for(var indexPath = 0; indexPath < letters[indexLetter].length; indexPath++){
            elements.push(<DrawPath key={`${indexLetter}-${indexPath}`} {...prepare(letters[indexLetter][indexPath])} progress={progress} color={color} effect={effect}/>);
        }    
    }

    return (
        <Group>
            {elements}
        </Group>
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
