import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tabs.Screen
                name="ant"
                options={{
                    tabBarLabel: "มด",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bug" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="bird"
                options={{
                    tabBarLabel: "นก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="twitter" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="cat"
                options={{
                    tabBarLabel: "แมว",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="paw" color={color} size={size} />),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
