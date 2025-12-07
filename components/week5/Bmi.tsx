import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('0.00');
    const [status, setStatus] = useState('-');

    const calculateBmi = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100; // แปลงจาก cm เป็น m

        if (weightNum > 0 && heightNum > 0) {
            const bmiValue = weightNum / (heightNum * heightNum);
            setBmi(bmiValue.toFixed(2));

            // กำหนดสถานะ BMI
            if (bmiValue < 18.5) {
                setStatus('Underweight');
            } else if (bmiValue < 25) {
                setStatus('Normal');
            } else if (bmiValue < 30) {
                setStatus('Overweight');
            } else if (bmiValue < 35) {
                setStatus('Obese');
            } else {
                setStatus('Extremely Obese');
            }
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <View style={{
                padding: 16,
                backgroundColor: '#F5F5F5',
                borderRadius: 8,
                height: 80,
                justifyContent: 'space-around',
                marginTop: 16
            }}>
                <Text style={{ fontSize: 14 }}>Weight (kg.)</Text>
                <TextInput
                    placeholder="Input your Weight"
                    style={{ fontSize: 18 }}
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                />
            </View>
            <View style={{
                padding: 16,
                backgroundColor: '#F5F5F5',
                borderRadius: 8,
                height: 80,
                justifyContent: 'space-around',
                marginTop: 16
            }}>
                <Text style={{ fontSize: 14 }}>Height (cm.)</Text>
                <TextInput
                    placeholder="Input your Height"
                    style={{ fontSize: 18 }}
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
                <View style={{
                    flex: 1,
                    padding: 16,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 8,
                    marginRight: 8,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>
                <View style={{
                    flex: 1,
                    padding: 16,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 8,
                    marginLeft: 8,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 18 }}>{status}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    marginTop: 16,
                    backgroundColor: '#2196F3',
                    padding: 16,
                    borderRadius: 8,
                    alignItems: 'center'
                }}
                onPress={calculateBmi}
            >
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>Calculate</Text>
            </TouchableOpacity>
        </View>
    );
}
