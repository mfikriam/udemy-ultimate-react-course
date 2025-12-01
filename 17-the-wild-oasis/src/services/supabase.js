import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xjxrsynfkriuwplqenwl.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqeHJzeW5ma3JpdXdwbHFlbndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MTk0NTgsImV4cCI6MjA4MDA5NTQ1OH0.L834l78h2dIG5ESVB_ahhOVwctvKVrzgiAo2kCHNHcs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
