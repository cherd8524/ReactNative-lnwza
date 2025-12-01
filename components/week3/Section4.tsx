import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#CCCCCC', padding: 16, marginHorizontal: 16, marginTop: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>Hotel Description</Text>
            <Text>
                218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>
        </View>
    );
}

