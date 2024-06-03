'use server';
import { cookies } from 'next/headers';

export async function joinGame(formData: FormData) {
	cookies().set('name', '');

	cookies().set('<room-id>', 'player');
}
