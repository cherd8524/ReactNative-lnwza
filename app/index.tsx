import { Link, router } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <ScrollView style={{ flex:1 }} >
            <View style={styles.container} >
                <Link href="/flexbox/ex01" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 1</Text>
                </Link>
                <Link href="/flexbox/ex02" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 2</Text>
                </Link>
                <Link href="/flexbox/ex03" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 3</Text>
                </Link>
                <Link href="/flexbox/ex04" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 4</Text>
                </Link>
                <Link href="/flexbox/ex05" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 5</Text>
                </Link>
                <Link href="/flexbox/ex06" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 6</Text>
                </Link>
                <Link href="/flexbox/ex07" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 7</Text>
                </Link>
                <Link href="/flexbox/ex08" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 8</Text>
                </Link>
                <Link href="/flexbox/ex09" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 9</Text>
                </Link>
                <Link href="/flexbox/ex10" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 10</Text>
                </Link>
                <Link href="/flexbox/ex11" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 11</Text>
                </Link>
                <Link href="/flexbox/ex12" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Exercise 12</Text>
                </Link>
                <Link href="/resort" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Resort</Text>
                </Link>
                <Link href="/health" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Health</Text>
                </Link>
                <Link href="/home" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Home</Text>
                </Link>
                <Link href="/chart" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Chart</Text>
                </Link>
                <Link href="/your-health" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Your Health</Text>
                </Link>
                <Link href="/todolist" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Todo List</Text>
                </Link>
                <Link href="/location" style={styles.link}>
                    <Text style={styles.linkText}>ไปหน้า Location</Text>
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", },
    link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
    linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});