import { TextInput, View, ViewProps, TextInputProps } from "react-native";
import { styles } from "./styles";
import { theme } from "@/theme";

function Input({ children, style }: ViewProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

// ...rest posso pegar todas as propriedades do TextInput e passar lá dentro
// {...rest} sempre bom deixar por último
function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.gray[300]}
      {...rest}
    />
  );
}

// Adicionando Field como uma propriedade dentro do Input
// Aqui quero dizer que ela vai receber o próprio componente Field
Input.Field = Field;

export { Input };
