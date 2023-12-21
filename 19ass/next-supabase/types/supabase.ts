export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      cities: {
        Row: {
          city_name: string
          country_id: number | null
          created_at: string | null
          id: number
        }
        Insert: {
          city_name: string
          country_id?: number | null
          created_at?: string | null
          id?: number
        }
        Update: {
          city_name?: string
          country_id?: number | null
          created_at?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "cities_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "countries"
            referencedColumns: ["id"]
          }
        ]
      }
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      todos: {
        Row: {
          created_at: string | null
          done: boolean
          id: number
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          done?: boolean
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          done?: boolean
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
