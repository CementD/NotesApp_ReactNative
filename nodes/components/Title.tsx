import { View, Text, StyleSheet } from "react-native";

export function Title(props: { text: string }) {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
});
