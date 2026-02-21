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
import { signIn } from "@/utils/auth";
import { useRouter } from "expo-router";

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

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await signIn(email, password);
            Alert.alert("Login Success", "ยินดีต้อนรับ");
            router.navigate("/");
        } catch (error: any) {
            Alert.alert("Login Error", error.message);
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
                    <Text style={styles.title}>เข้าสู่ระบบ</Text>
                    <Text style={styles.subtitle}>
                        กรอกอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ
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
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
                    </Pressable>
                </View>
                <Pressable
                    style={styles.link}
                    onPress={() => router.navigate("/register")}
                >
                    <Text style={styles.linkText}>
                        ยังไม่มีบัญชี? สมัครสมาชิก
                    </Text>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
