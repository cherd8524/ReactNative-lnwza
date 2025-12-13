import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props: any) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour</Text>
            <Text style={{ color: "grey" }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                <TourItem />
                <TourItem />
                <TourItem />
            </ScrollView>
        </View>
    );
}
