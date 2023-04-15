export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          created_at: string | null
          descriptio: string | null
          id: number
          is_done: boolean | null
          task_name: string | null
          user: string | null
        }
        Insert: {
          created_at?: string | null
          descriptio?: string | null
          id?: number
          is_done?: boolean | null
          task_name?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string | null
          descriptio?: string | null
          id?: number
          is_done?: boolean | null
          task_name?: string | null
          user?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
