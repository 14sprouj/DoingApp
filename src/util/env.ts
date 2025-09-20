require('dotenv').config()

interface EnvConfig {
	/**
	 * Supabase configuration
	 */
	Supabase: {
		/** Supabase URL */
		Url: string
		/** Supabase Public Key */
		PubKey: string
		/** Supabase Password */
		Password: string
	}
}

export const Env: EnvConfig = {
	Supabase: {
		Url: process.env.SupabaseUrl || '',
		PubKey: process.env.SupabasePubKey || '',
		Password: process.env.SupabasePassword || ''
	}
}
