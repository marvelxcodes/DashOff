'use server';
import { cookies } from 'next/headers';

export async function createGame(formData: FormData) {
	cookies().set('name', '');
	
	cookies().set('<room-id>', 'admin');
}
