import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal: 16, marginTop: 16, paddingBottom: 5, borderBottomWidth: 1, borderColor: '#CCCCCC' }}>
            <Text style={{ fontWeight: 'bold' }}>Location</Text>
            <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View style={{ marginTop: 16 }}>
                <Image source={require('../../assets/week3/map.jpg')} />
            </View>
        </View>
    );
}

