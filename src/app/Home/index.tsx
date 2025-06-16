import { View } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { useState } from "react";

export function Home() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input style={styles.input}>
          <Feather name="search" size={16} color={theme.colors.gray[300]} />
          <Input.Field
            placeholder="Pesquisar pelo nome..."
            value={name}
            onChangeText={setName}
          />
          <Feather
            name="x"
            size={16}
            color={theme.colors.gray[300]}
            onPress={() => setName("")}
          />
        </Input>
      </View>
    </View>
  );
}
