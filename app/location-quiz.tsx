import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MapView from "react-native-maps";
import { getData } from "@/utils/api";
import UserMarkers from "@/components/week10/UserMarkers";

type LocationUser = {
    id: number;
    user_id: string;
    latitude: string;
    longitude: string;
};

export default function LocationQuiz() {
    const [users, setUsers] = useState<LocationUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await getData("/location");
                setUsers(Array.isArray(data) ? data : []);
            } catch (e) {
                console.warn(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ padding: 8, textAlign: "center" }}>
                รายชื่อคนใน API (กดที่หมุดเพื่อดู user_id)
            </Text>
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1, width: "100%", height: "100%" }}
                    initialRegion={{
                        latitude: 14.13,
                        longitude: 100.616,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                    showsUserLocation={true}
                >
                    <UserMarkers items={users} />
                </MapView>
            </View>
            {loading && (
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(255,255,255,0.6)",
                    }}
                    pointerEvents="none"
                >
                    <ActivityIndicator size="large" color="#2196F3" />
                </View>
            )}
        </View>
    );
}
