import React from 'react';
import { Image, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('@/assets/week3/room-6.jpg')}
                    style={{ flex: 1, aspectRatio: 3 }}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
}

