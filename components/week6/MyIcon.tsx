import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type IconName = React.ComponentProps<typeof FontAwesome>['name'];

export default function MyIcon(props: { name: IconName; size: number; color: string; title: string }) {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <FontAwesome name={props.name} size={props.size} color={props.color} />
            <Text>{props.title}</Text>
        </View>
    );
}
