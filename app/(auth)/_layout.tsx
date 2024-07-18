// import Colors from "@/constants/Colors";
// import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
// import { TouchableOpacity } from "react-native";

// import { SQLiteProvider } from 'expo-sqlite/next';
// import { migrateDbIfNeeded } from '@/utils/Database';
// import { RevenueCatProvider } from '@/providers/RevenueCat';

const Layout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
