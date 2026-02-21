import { supabase } from "./supabase";

// สมัครสมาชิก
export async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
}

// เข้าสู่ระบบ
export async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
}

// ดึง user ปัจจุบัน
export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    // if (error) throw error;
    if (error) return null;
    return data.user;
}

// ออกจากระบบ
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}