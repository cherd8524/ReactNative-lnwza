import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tabs.Screen
                name="charmander"
                options={{
                    tabBarLabel: "Charmander",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="fire" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="pikachu"
                options={{
                    tabBarLabel: "Pikachu",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bolt" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="ivysour"
                options={{
                    tabBarLabel: "Ivysaur",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="leaf" color={color} size={size} />),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
