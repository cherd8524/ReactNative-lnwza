import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FF0000',
                    width: 60,
                    height: 60
                }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>9.5</Text>
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 12 }}>
                    <Text style={{ color: '#FF0000' }}>Excellent</Text>
                    <Text>See 801 reviews</Text>
                </View>
            </View>
        </View>
    );
}

