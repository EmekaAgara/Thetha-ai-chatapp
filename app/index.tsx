import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLoginSheet from "@/components/BottomLoginSheet";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedIntro />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <BottomLoginSheet />
    </View>
  );
}
