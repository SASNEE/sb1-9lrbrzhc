/*
  # Token Management System Schema

  1. New Tables
    - `tokens`
      - `id` (uuid, primary key)
      - `description` (text)
      - `status` (enum: pending, in_progress, completed)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `admin_comment` (text)

  2. Security
    - Enable RLS on `tokens` table
    - Add policies for:
      - Users can create tokens and read their own tokens
      - Admin can read and modify all tokens
*/

-- Create enum for token status
CREATE TYPE token_status AS ENUM ('pending', 'in_progress', 'completed');

-- Create tokens table
CREATE TABLE IF NOT EXISTS tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  description text NOT NULL,
  status token_status DEFAULT 'pending',
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  admin_comment text DEFAULT '',
  CONSTRAINT valid_description CHECK (char_length(description) > 0)
);

-- Enable RLS
ALTER TABLE tokens ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can create tokens"
  ON tokens
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read own tokens"
  ON tokens
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admin can read all tokens"
  ON tokens
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'admin@example.com'
  ));

CREATE POLICY "Admin can update all tokens"
  ON tokens
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email = 'admin@example.com'
  ));