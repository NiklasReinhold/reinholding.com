import { Canvas, Fill, Glyphs, Group, Skia, TextBlob, TextPath, useFont, vec } from "@shopify/react-native-skia";
import { StyleSheet } from 'react-native';

const PATH_FONT = "../assets/fonts/LEMONMILK-Regular.otf";

export default function Main() {
    const font = useFont(require("../assets/fonts/LEMONMILK-Regular.otf"), 24);
  if (font === null) {
    return null;
  }
  const blob = Skia.TextBlob.MakeFromText("Hello World!", font);
  return (
      <Canvas style={{ flex: 1 }}>
        <TextBlob
          blob={blob}
          color="blue"
        />
      </Canvas>
  );
}

const styles = StyleSheet.create({
    
});