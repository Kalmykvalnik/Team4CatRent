import { cookies } from 'next/headers';

export default function session() {
  const session = cookies().get('token');
  return session?.value
}