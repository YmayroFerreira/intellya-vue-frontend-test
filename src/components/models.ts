export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface User {
  active: boolean;
  created_at: string;
  email: string;
  id: number;
  name: string;
  role: string;
}
