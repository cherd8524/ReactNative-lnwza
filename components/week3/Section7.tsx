import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ marginHorizontal: 16, marginTop: 16, paddingBottom: 16, borderBottomWidth: 1, borderColor: '#CCCCCC' }}>
            <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 12 }}>Room Type</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            source={require('../../assets/week3/room-8.jpg')}
                            style={{ width: 100, height: 120, resizeMode: 'cover', borderRadius: 10 }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 12, justifyContent: 'space-around', flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold' }}>Standard Twin Room</Text>
                        <View style={{ flexDirection: 'column', marginTop: 8 }}>
                            <Text style={{ color: '#FF0000' }}>$399.99</Text>
                            <Text style={{ color: '#2196F3' }}>Hurry Up! This is your last room!</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

