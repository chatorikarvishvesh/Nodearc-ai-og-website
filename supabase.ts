import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lbphmpqicpogowbspaab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxicGhtcHFpY3BvZ293YnNwYWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzODU3NjcsImV4cCI6MjA4MTk2MTc2N30.8pNgAyhpCgCZDIr9E1sMHePxW8qyBhtuqz8zd1Ec7Wg';

export const supabase = createClient(supabaseUrl, supabaseKey);