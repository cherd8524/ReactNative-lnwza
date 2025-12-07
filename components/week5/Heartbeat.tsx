import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    };

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                padding: 16,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#F5F5F5',
                borderRadius: 8,
                marginTop: 16
            }}>
                <TouchableOpacity onPress={handlePress}>
                    <FontAwesome name="heart" size={48} color="#FF0000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 48 }}>{count}</Text>
            </View>
        </View>
    );
}
