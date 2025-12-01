import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop: -25, padding: 16, backgroundColor: 'white', marginHorizontal: 16, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Hilton San Francisco
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 8 }}>
                <FontAwesome name="star" size={16} color="#FFD700" />
                <FontAwesome name="star" size={16} color="#FFD700" />
                <FontAwesome name="star" size={16} color="#FFD700" />
                <FontAwesome name="star" size={16} color="#FFD700" />
                <FontAwesome name="star-half-o" size={16} color="#FFD700" />
            </View>
            <Text style={{ textAlign: 'center' }}>
                Facilities provided may range from a modest quality mattress in a small room to large suites
            </Text>
        </View>
    );
}

