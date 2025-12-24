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
      user_profiles: {
        Row: {
          id: string
          email: string
          password_hash: string
          full_name: string
          role: 'admin' | 'editor'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          full_name: string
          role?: 'admin' | 'editor'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          full_name?: string
          role?: 'admin' | 'editor'
          created_at?: string
          updated_at?: string
        }
      }
      trade_types: {
        Row: {
          id: string
          slug: string
          name: string
          status: boolean
          created_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          status?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          status?: boolean
          created_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          parent_id: string | null
          slug: string
          name: string
          type: string | null
          description: string | null
          status: boolean
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          parent_id?: string | null
          slug: string
          name: string
          type?: string | null
          description?: string | null
          status?: boolean
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          parent_id?: string | null
          slug?: string
          name?: string
          type?: string | null
          description?: string | null
          status?: boolean
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          category_id: string
          slug: string
          name: string
          type: string | null
          short_description: string
          long_description: string
          hs_code: string | null
          brand: string | null
          origin_country: string | null
          status: boolean
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category_id: string
          slug: string
          name: string
          type?: string | null
          short_description: string
          long_description: string
          hs_code?: string | null
          brand?: string | null
          origin_country?: string | null
          status?: boolean
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category_id?: string
          slug?: string
          name?: string
          type?: string | null
          short_description?: string
          long_description?: string
          hs_code?: string | null
          brand?: string | null
          origin_country?: string | null
          status?: boolean
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      product_trade_types: {
        Row: {
          id: string
          product_id: string
          trade_type_id: string
        }
        Insert: {
          id?: string
          product_id: string
          trade_type_id: string
        }
        Update: {
          id?: string
          product_id?: string
          trade_type_id?: string
        }
      }
      product_images: {
        Row: {
          id: string
          product_id: string
          image_url: string
          alt_text: string
          is_primary: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          image_url: string
          alt_text: string
          is_primary?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          image_url?: string
          alt_text?: string
          is_primary?: boolean
          sort_order?: number
          created_at?: string
        }
      }
      product_specifications: {
        Row: {
          id: string
          product_id: string
          spec_key: string
          spec_value: string
          unit: string | null
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          spec_key: string
          spec_value: string
          unit?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          spec_key?: string
          spec_value?: string
          unit?: string | null
          created_at?: string
        }
      }
      blog_categories: {
        Row: {
          id: string
          slug: string
          name: string
          description: string | null
          status: boolean
          created_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          description?: string | null
          status?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          description?: string | null
          status?: boolean
          created_at?: string
        }
      }
      blogs: {
        Row: {
          id: string
          blog_category_id: string
          slug: string
          title: string
          excerpt: string
          content: string
          featured_image: string | null
          author_id: string
          status: 'draft' | 'published'
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          blog_category_id: string
          slug: string
          title: string
          excerpt: string
          content: string
          featured_image?: string | null
          author_id: string
          status?: 'draft' | 'published'
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          blog_category_id?: string
          slug?: string
          title?: string
          excerpt?: string
          content?: string
          featured_image?: string | null
          author_id?: string
          status?: 'draft' | 'published'
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_products: {
        Row: {
          id: string
          blog_id: string
          product_id: string
        }
        Insert: {
          id?: string
          blog_id: string
          product_id: string
        }
        Update: {
          id?: string
          blog_id?: string
          product_id?: string
        }
      }
      client_inquiries: {
        Row: {
          id: string
          full_name: string
          country: string
          company_name: string
          designation: string
          product_type: string
          phone_code: string
          phone_number: string
          telephone_number: string | null
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          full_name: string
          country: string
          company_name: string
          designation: string
          product_type: string
          phone_code: string
          phone_number: string
          telephone_number?: string | null
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          country?: string
          company_name?: string
          designation?: string
          product_type?: string
          phone_code?: string
          phone_number?: string
          telephone_number?: string | null
          email?: string
          created_at?: string
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
      user_role: 'admin' | 'editor'
      blog_status: 'draft' | 'published'
    }
  }
}

