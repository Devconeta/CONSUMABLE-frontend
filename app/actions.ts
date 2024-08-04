'use server';

import { cookies } from 'next/headers';

export async function consume(secret: string) {
  // invocar sdk y esperar respuesta

  cookies().delete('secret');

  return 'a';
}
