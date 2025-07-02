import { Image, ImageProps, Text, View } from "react-native";
import { styles } from "./styles";

const variants = {
  size: {
    medium: { width: 54, height: 54, borderRadius: 18 },
    large: { width: 100, height: 100, borderRadius: 32 },
  },
  text: {
    medium: { fontSize: 24 },
    large: { fontSize: 52 },
  },
};

type Props = {
  image?: ImageProps | null;
  name: string;
  vartiant?: "medium" | "large";
};

export function Avatar({ image, name, vartiant = "medium" }: Props) {
  return (
    <View>
      {image ? (
        <Image source={image} style={variants.size[vartiant]} />
      ) : (
        <View style={[styles.letter, variants.size[vartiant]]}>
          <Text style={[styles.text, variants.text[vartiant]]}>
            {name[0].toUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
}
