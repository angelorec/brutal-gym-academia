import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hinzsczhfileqxblgjjo.supabase.co';
const supabaseAnonKey = 'sb_publishable_p5k2eCpgtiqhFaKRVJhkNQ_SDonS9ie';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
