import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section5() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 16, paddingBottom: 16, borderBottomWidth: 1, borderColor: '#CCCCCC'}}>
            <View style={{ alignItems: 'center' }}>
                <FontAwesome name="wifi" size={24} color="#2196F3" />
                <Text style={{ marginTop: 8 }}>Wifi</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FontAwesome name="coffee" size={24} color="#2196F3" />
                <Text style={{ marginTop: 8 }}>Coffee</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FontAwesome name="bath" size={24} color="#2196F3" />
                <Text style={{ marginTop: 8 }}>Bath</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FontAwesome name="car" size={24} color="#2196F3" />
                <Text style={{ marginTop: 8 }}>Car</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FontAwesome name="paw" size={24} color="#2196F3" />
                <Text style={{ marginTop: 8 }}>Paw</Text>
            </View>
        </View>
    );
}
