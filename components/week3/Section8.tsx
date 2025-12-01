import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 16, paddingBottom: 16, borderBottomWidth: 1, borderColor: '#CCCCCC' }}>
            <View style={{ flexDirection: 'column' }}>
                <Text>Price</Text>
                <Text style={{ color: '#FF0000', fontSize: 24, fontWeight: 'bold' }}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            <View style={{ alignSelf: 'stretch', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 8,
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        alignSelf: 'stretch',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

