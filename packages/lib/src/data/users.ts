import { SupabaseClient } from '@supabase/supabase-js';

export type User = {
	id: number;
	name: string;
	email: string;
}

export type CreateUser = Omit<User, 'id'>;

export async function createUser(supabase: SupabaseClient, data: CreateUser) {
	supabase.from('users').insert(data)
}

export async function getUser(supabase: SupabaseClient, id: number) {
	return supabase.from('users').select('*').eq('id', id).returns<User>()
}

export async function getNewUsers(supabase: SupabaseClient) {
	supabase.from('users').select('*').eq('isNew', true)
}

