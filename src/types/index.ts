export type TokenStatus = 'pending' | 'in_progress' | 'completed';

export interface Token {
  id: string;
  description: string;
  status: TokenStatus;
  user_id: string;
  created_at: string;
  updated_at: string;
  admin_comment: string;
}