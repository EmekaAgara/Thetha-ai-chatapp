import AnimatedIntro from "@/components/AnimatedIntro";
import BottomLoginSheet from "@/components/BottomLoginSheet";
import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedIntro />
      <Text>logged in</Text>
      <Button title="logout" onPress={() => signOut()} />

      <Link
        href={{
          pathname: "/(drawer)/(chat)/new",
          // params: { type: "register" },
        }}
        asChild
      >
        <Button title="chat" />
      </Link>

      {/* <BottomLoginSheet /> */}
    </View>
  );
}
