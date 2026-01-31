import { FontAwesome } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";

const EXERCISE_COUNT = 12;

function NextButton() {
    const pathname = usePathname();
    const router = useRouter();

    const match = pathname.match(/flexbox\/ex(\d+)/);
    const currentNum = match ? parseInt(match[1], 10) : 0;

    if (currentNum === 0 || currentNum >= EXERCISE_COUNT) return null;

    const nextNum = currentNum + 1;
    const nextPath = `/flexbox/ex${String(nextNum).padStart(2, "0")}`;

    return (
        <Pressable
            onPress={() => router.push(nextPath as any)}
            style={({ pressed }) => ({
                marginRight: 16,
                opacity: pressed ? 0.7 : 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
            })}
        >
            <Text style={{ color: "tomato", fontSize: 16, fontWeight: "600" }}>
                Next
            </Text>
            <FontAwesome name="chevron-right" size={14} color="tomato" />
        </Pressable>
    );
}

export default function ExerciseLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#f5f5f5" },
                headerTintColor: "#333",
                headerRight: () => <NextButton />,
            }}
        >
            <Stack.Screen name="flexbox/ex01" options={{ title: "Flexbox 1" }} />
            <Stack.Screen name="flexbox/ex02" options={{ title: "Flexbox 2" }} />
            <Stack.Screen name="flexbox/ex03" options={{ title: "Flexbox 3" }} />
            <Stack.Screen name="flexbox/ex04" options={{ title: "Flexbox 4" }} />
            <Stack.Screen name="flexbox/ex05" options={{ title: "Flexbox 5" }} />
            <Stack.Screen name="flexbox/ex06" options={{ title: "Flexbox 6" }} />
            <Stack.Screen name="flexbox/ex07" options={{ title: "Flexbox 7" }} />
            <Stack.Screen name="flexbox/ex08" options={{ title: "Flexbox 8" }} />
            <Stack.Screen name="flexbox/ex09" options={{ title: "Flexbox 9" }} />
            <Stack.Screen name="flexbox/ex10" options={{ title: "Flexbox 10" }} />
            <Stack.Screen name="flexbox/ex11" options={{ title: "Flexbox 11" }} />
            <Stack.Screen name="flexbox/ex12" options={{ title: "Flexbox 12" }} />
        </Stack>
    );
}
