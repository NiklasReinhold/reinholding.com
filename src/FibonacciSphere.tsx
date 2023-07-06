import { Canvas, Circle, Fill, Paint, Shader, Skia, center, vec } from "@shopify/react-native-skia";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const source = Skia.RuntimeEffect.Make(`
uniform float3 iResolution;      // Viewport resolution (pixels)
uniform float  iTime;            // Shader playback time (s)
uniform float4 iMouse;           // Mouse drag pos=.xy Click pos=.zw (pixels)
uniform float3 iImageResolution; // iImage1 resolution (pixels)
uniform shader iImage1;          // An input image.

// Source: @XorDev https://twitter.com/XorDev/status/1475524322785640455
vec4 main(vec2 FC) {
  vec4 o = vec4(0);
  vec2 p = vec2(0), c=p, u=FC.xy*2.-iResolution.xy;
  float a;
  for (float i=0; i<4e2; i++) {
    a = i/2e2-1.;
    p = cos(i*2.4+iTime+vec2(0,11))*sqrt(1.-a*a);
    c = u/iResolution.y+vec2(p.x,a)/(p.y+2.);
    o += (cos(i+vec4(0,2,4,0))+1.)/dot(c,c)*(1.-p.y)/3e4;
  }
  return o;
}`)!;


export default function FibonacciSphere() {

    return (
      <Canvas style={styles.container}>
        <Fill>
          <Shader source={source} />
        </Fill>
      </Canvas>
    );
}
        
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

