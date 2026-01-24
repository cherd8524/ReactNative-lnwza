import React from "react";
import { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UserMarkers(props: { items: Array<{ id: number; user_id: string; latitude: string; longitude: string }> }) {
    return props.items.map((item) => (
        <Marker
            key={item.id}
            coordinate={{
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
            }}
            title={item.user_id}
        >
            <FontAwesome name="user" size={24} color="#2196F3" />
        </Marker>
    ));
}
