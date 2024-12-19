import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import type { Token } from '../../types';

export function useTokens() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'tokens'), orderBy('created_at', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newTokens = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Token[];
      
      setTokens(newTokens);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { tokens, loading };
}