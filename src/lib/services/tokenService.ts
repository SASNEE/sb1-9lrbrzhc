import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import type { Token } from '../../types';

export async function createToken(description: string): Promise<void> {
  const user = auth.currentUser;
  if (!user) throw new Error('User must be authenticated');

  await addDoc(collection(db, 'tokens'), {
    description,
    status: 'pending',
    user_id: user.uid,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
    admin_comment: ''
  });
}