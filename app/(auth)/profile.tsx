import { getCurrentUser, signOut } from "@/utils/auth";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    ActivityIndicator,
} from "react-native";
import { router } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f4f6",
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
    label: {
        fontSize: 13,
        color: "#6b7280",
        marginBottom: 4,
    },
    email: {
        fontSize: 18,
        fontWeight: "600",
        color: "#111827",
    },
    welcome: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
    },
    logoutButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e5e7eb",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 24,
    },
    logoutText: {
        color: "#dc2626",
        fontSize: 16,
        fontWeight: "600",
    },
    loginButton: {
        backgroundColor: "#2563eb",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 16,
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#6b7280",
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 15,
        color: "#9ca3af",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function Profile() {
    const [user, setUser] = useState<{ email?: string } | null>(null);
    const [loading, setLoading] = useState(true);

    const checkUser = async () => {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        setLoading(false);
    };

    const logout = async () => {
        try {
            await signOut();
            setUser(null);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#2563eb" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {user ? (
                <View style={styles.card}>
                    <Text style={styles.welcome}>โปรไฟล์</Text>
                    <Text style={styles.label}>อีเมล</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.logoutButton,
                            pressed && { opacity: 0.9 },
                        ]}
                        onPress={logout}
                    >
                        <Text style={styles.logoutText}>ออกจากระบบ</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.card}>
                    <Text style={styles.emptyTitle}>ยังไม่ได้เข้าสู่ระบบ</Text>
                    <Text style={styles.emptySubtitle}>
                        เข้าสู่ระบบเพื่อดูโปรไฟล์และจัดการบัญชี
                    </Text>
                    <Pressable
                        style={({ pressed }) => [
                            styles.loginButton,
                            pressed && { opacity: 0.9 },
                        ]}
                        onPress={() => router.navigate("/login")}
                    >
                        <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}
