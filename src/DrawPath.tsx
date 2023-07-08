import React, { useEffect } from "react";
import type {
  SkiaValue,
  SkPath,
  SkRect,
} from "@shopify/react-native-skia";
import {
  PaintStyle,
  StrokeJoin,
  StrokeCap,
  Group,
  rect,
  Skia,
  Path,
  processTransform2d,
  fitbox,
  DashPathEffect,
  DiscretePathEffect,
  Line2DPathEffect,
} from "@shopify/react-native-skia";
import { Dimensions} from "react-native";

const fitRect = (src: SkRect, dst: SkRect) =>
    processTransform2d(fitbox("contain", src, dst));
    
const strokeWidth = 2;
const pad = 5;
const { width, height } = Dimensions.get("window");

//Size of the drawing
export const dst = rect(pad, pad, width - pad * 2, height - pad * 2);

//Prepare the path for drawing
//fit in the screen
export const prepare = (svg: string) => {
  const path = Skia.Path.MakeFromSVGString(svg)!;
  const src = rect(0, 0, 594.301, 99.001); //path.computeTightBounds(); //better use svg size
  const m3 = fitRect(src, dst);
  path.transform(m3);
  return { path};
};

//Available effects
const effects = [
  <Line2DPathEffect
    width={0.2}
    matrix={processTransform2d([{ scale: 1.5 }])}
    />,
  <DashPathEffect intervals={[6, 6]} />,
  <DiscretePathEffect length={10} deviation={2} />,
];
export const GetRandomEffect = () => effects[Math.floor(Math.random() * effects.length)];

//Configure the paint
const basePaint = Skia.Paint();
basePaint.setStrokeWidth(strokeWidth);
basePaint.setStyle(PaintStyle.Stroke);
basePaint.setStrokeJoin(StrokeJoin.Round);
basePaint.setStrokeCap(StrokeCap.Round);

//Draw
export const DrawPath = ({
  progress,
  path,
  color, 
  effect,
}: DrawPathProps) => {

  return (
    <Group>
      <Path 
        path={path} 
        paint={basePaint} 
        end={progress} 
        style="stroke" 
        color={color}
        strokeWidth={strokeWidth}>
          {effect.current}
      </Path>
    </Group>
  );
};

interface DrawPathProps {
  path: SkPath;
  progress: SkiaValue<number>;
  color: SkiaValue<Float32Array>;
  effect: SkiaValue<JSX.Element>;
}