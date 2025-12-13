import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json")
            .then((response) => response.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Upcoming Event</Text>
            <Text style={{ color: "grey" }}>What's the worst that could happen</Text>
            <FlatList
                style={{ marginTop: 10 }}
                horizontal={true}
                data={events}
                renderItem={({ item }: { item: any }) => {
                    return (
                        <View style={{ marginRight: 10 }}>
                            <Image
                                style={{ width: 250, height: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                source={{ uri: item.uri }}
                            />
                            <View style={{
                                flexDirection: "row",
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderWidth: 1,
                                borderColor: "grey",
                                borderTopWidth: 0
                            }}>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ fontSize: 14, color: "red", textAlign: "center" }}>{item.month}</Text>
                                    <Text style={{ fontSize: 24, color: "black", textAlign: "center" }}>{item.date}</Text>
                                </View>
                                <View style={{ padding: 10, flex: 1 }}>
                                    <Text style={{ fontSize: 16, color: "black" }}>{item.title}</Text>
                                    <Text style={{ color: "grey" }}>{item.datetime}</Text>
                                    <Text style={{ color: "grey" }}>{item.place}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item: any) => item.id}
            />
        </View>
    );
}
