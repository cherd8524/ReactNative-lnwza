import { signUp } from "@/utils/auth";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    Alert,
    StyleSheet,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f4f6",
        justifyContent: "center",
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 24,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 24,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: "#6b7280",
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#2563eb",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    link: {
        marginTop: 20,
        alignItems: "center",
    },
    linkText: {
        color: "#2563eb",
        fontSize: 15,
        fontWeight: "500",
    },
});

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async () => {
        try {
            await signUp(email, password);
            Alert.alert(
                "สมัครสมาชิกสำเร็จ",
                "กรุณาตรวจสอบอีเมลเพื่อยืนยันตัวตน"
            );
            router.navigate("/login");
        } catch (error: any) {
            Alert.alert("สมัครสมาชิกไม่สำเร็จ", error.message);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.card}>
                    <Text style={styles.title}>สมัครสมาชิก</Text>
                    <Text style={styles.subtitle}>
                        สร้างบัญชีเพื่อใช้งานแอป
                    </Text>
                    <TextInput
                        placeholder="อีเมล"
                        placeholderTextColor="#9ca3af"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput
                        placeholder="รหัสผ่าน"
                        placeholderTextColor="#9ca3af"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            pressed && { opacity: 0.9 },
                        ]}
                        onPress={handleRegister}
                    >
                        <Text style={styles.buttonText}>สมัครสมาชิก</Text>
                    </Pressable>
                </View>
                <Pressable
                    style={styles.link}
                    onPress={() => router.navigate("/login")}
                >
                    <Text style={styles.linkText}>
                        มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
                    </Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
