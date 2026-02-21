import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

// DB TEMP PASS
// esy5ahcY76lg7dVV
// SUPABASE PROJECT URL
// https://azyrslmyojahcaoqlggl.supabase.co
// SUPABASE ANON KEY
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6eXJzbG15b2phaGNhb3FsZ2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MjA1NTUsImV4cCI6MjA4NTk5NjU1NX0.NXr4JeIh9SBRMhG7UpbN2aqnO-zkQPjU5SXCgmbRf5g

const supabaseUrl = "https://azyrslmyojahcaoqlggl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6eXJzbG15b2phaGNhb3FsZ2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MjA1NTUsImV4cCI6MjA4NTk5NjU1NX0.NXr4JeIh9SBRMhG7UpbN2aqnO-zkQPjU5SXCgmbRf5g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
