import { Canvas, Circle, Fill, Paint, Shader, Skia, center, vec } from "@shopify/react-native-skia";
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const source = Skia.RuntimeEffect. Make(`
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
    }
`);

export default function FibonacciSphere() {

    return (
      <Canvas style={{ width: 256, height: 256 }}>
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

