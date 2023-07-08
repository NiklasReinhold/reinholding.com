import { DashPathEffect, DiscretePathEffect, Line2DPathEffect, processTransform2d } from "@shopify/react-native-skia";

//Available effects
const effects = [
    null,
    <Line2DPathEffect
      width={0.2}
      matrix={processTransform2d([{ scale: 1.5 }])}
      />,
    <DashPathEffect intervals={[6, 6]} />,
    <DiscretePathEffect length={10} deviation={2} />,
];
var last_index = 0;
export function GetRandomEffect () {
    //Get a random index except for the last_index
    var index = Math.floor(Math.random() * (effects.length - 1));
    if(index >= last_index){
        index++;
    }
    last_index = index;
    return effects[index];
}
  