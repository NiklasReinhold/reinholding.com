import React, { useMemo } from "react";
import { useWindowDimensions } from "react-native";
import type { SkiaValue } from "@shopify/react-native-skia";
import {
  useComputedValue,
  useLoop,
  BlurMask,
  vec,
  Circle,
  Group,
  polar2Canvas,
  Easing,
  mix,
} from "@shopify/react-native-skia";

const c1 = "#61bea2";
const c2 = "#529ca0";

interface RingProps {
  index: number;
  progress: SkiaValue<number>;
}

const Ring = ({ index, progress }: RingProps) => {
  var { width, height } = useWindowDimensions();
  width/=2;
  height/=2;

  const R = width / 8;
  const center = useMemo(
    () => vec(width / 2, height / 2 - 64),
    [height, width]
  );

  const theta = (index * (2 * Math.PI)) / 6;
  const transform = useComputedValue(() => {
    const { x, y } = polar2Canvas(
      { theta, radius: progress.current * R },
      { x: 0, y: 0 }
    );
    const scale = mix(progress.current, 0.3, 1);
    return [{ translateX: x }, { translateY: y }, { scale }];
  }, [progress]);

  return (
    <Group origin={center} transform={transform}>
      <Circle c={center} r={R} color={index % 2 ? c1 : c2} />
    </Group>
  );
};

 const Breathe = () => {
  var { width, height } = useWindowDimensions();
  width/=2;
  height/=2;
  
  const center = useMemo(
    () => vec(width / 2, height / 2-64),
    [height, width]
  );

  const progress = useLoop({
    duration: 2000,
    easing: Easing.inOut(Easing.ease),
  });

  const transform = useComputedValue(
    () => [{ rotate: mix(progress.current, -Math.PI, 0) }],
    [progress]
  );

  return (
    <Group origin={center} transform={transform} blendMode="screen">
      <BlurMask style="solid" blur={0} />
      {new Array(6).fill(0).map((_, index) => {
        return <Ring key={index} index={index} progress={progress} />;
      })}
    </Group>
  );
};

export default Breathe