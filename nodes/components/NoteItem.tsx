import { View, Text, StyleSheet } from "react-native";

// interface NoteItemProps {
//     title: string;
// }

type NoteItemProps = {
  title: string;
  onDelete: () => void;
};

export function NoteItem({ title, onDelete }: NoteItemProps) {
  return (
    <View style={styles.note}>
      <Text style={styles.text}>{title}</Text>

      <Text style={styles.delete} onPress={onDelete}>
        Delete
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  text: {
    fontSize: 16,
    flexWrap: "wrap", // ✅ перенос длинных текстов
  },
  delete: {
    color: "red",
    marginTop: 8,
    fontSize: 14,
  },
});
