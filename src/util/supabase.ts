import { createClient } from '@supabase/supabase-js'
import { Env } from './env'
const supabase = createClient(Env.Supabase.Url, Env.Supabase.PubKey)

export class SupabaseService {
	private client

	constructor() {
		this.client = supabase
	}
}

export default supabase
