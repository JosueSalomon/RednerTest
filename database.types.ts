export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  resapi: {
    Tables: {
      TBL_CATEGORIA_POR_PRODUCTO: {
        Row: {
          ID_CAT_POR_PROD: number
          ID_CATEGORIA: number
          ID_PRODUCTO: number
        }
        Insert: {
          ID_CAT_POR_PROD?: number
          ID_CATEGORIA: number
          ID_PRODUCTO: number
        }
        Update: {
          ID_CAT_POR_PROD?: number
          ID_CATEGORIA?: number
          ID_PRODUCTO?: number
        }
        Relationships: [
          {
            foreignKeyName: "TBL_CATEGORIA_POR_PRODUCTO_ID_CATEGORIA_fkey"
            columns: ["ID_CATEGORIA"]
            isOneToOne: false
            referencedRelation: "TBL_CATEGORIAS"
            referencedColumns: ["ID_CATEGORIA"]
          },
          {
            foreignKeyName: "TBL_CATEGORIA_POR_PRODUCTO_ID_PRODUCTO_fkey"
            columns: ["ID_PRODUCTO"]
            isOneToOne: false
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_CATEGORIAS: {
        Row: {
          CATEGORIA: string | null
          ID_CATEGORIA: number
        }
        Insert: {
          CATEGORIA?: string | null
          ID_CATEGORIA?: number
        }
        Update: {
          CATEGORIA?: string | null
          ID_CATEGORIA?: number
        }
        Relationships: []
      }
      TBL_CATEGORIAS_MAT: {
        Row: {
          CATEGORIA: string | null
          ID_CATEGORIA: number
        }
        Insert: {
          CATEGORIA?: string | null
          ID_CATEGORIA?: number
        }
        Update: {
          CATEGORIA?: string | null
          ID_CATEGORIA?: number
        }
        Relationships: []
      }
      TBL_CIUDADES: {
        Row: {
          CIUDAD: string | null
          ID_CIUDAD: number
          ID_DEPARTAMENTO: number | null
        }
        Insert: {
          CIUDAD?: string | null
          ID_CIUDAD?: number
          ID_DEPARTAMENTO?: number | null
        }
        Update: {
          CIUDAD?: string | null
          ID_CIUDAD?: number
          ID_DEPARTAMENTO?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_CIUDADES_ID_DEPARTAMENTO_fkey"
            columns: ["ID_DEPARTAMENTO"]
            isOneToOne: false
            referencedRelation: "TBL_DEPARTAMENTOS"
            referencedColumns: ["ID_DEPARTAMENTO"]
          },
        ]
      }
      TBL_CODIGOS_TUTORIAL: {
        Row: {
          CODIGO_TUTORIAL: string | null
          DESCRIPCION: string | null
          ESTADO_CODIGO: boolean | null
          ID_CODIGO_TUTORIAL: number
          ID_FACTURA: number | null
        }
        Insert: {
          CODIGO_TUTORIAL?: string | null
          DESCRIPCION?: string | null
          ESTADO_CODIGO?: boolean | null
          ID_CODIGO_TUTORIAL?: number
          ID_FACTURA?: number | null
        }
        Update: {
          CODIGO_TUTORIAL?: string | null
          DESCRIPCION?: string | null
          ESTADO_CODIGO?: boolean | null
          ID_CODIGO_TUTORIAL?: number
          ID_FACTURA?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_CODIGOS_TUTORIAL_ID_FACTURA_fkey"
            columns: ["ID_FACTURA"]
            isOneToOne: false
            referencedRelation: "TBL_FACTURAS"
            referencedColumns: ["ID_FACTURA"]
          },
        ]
      }
      TBL_COLORES: {
        Row: {
          COLOR: string | null
          ID_COLOR: number
        }
        Insert: {
          COLOR?: string | null
          ID_COLOR?: number
        }
        Update: {
          COLOR?: string | null
          ID_COLOR?: number
        }
        Relationships: []
      }
      TBL_DEPARTAMENTOS: {
        Row: {
          DEPARTAMENTO: string | null
          ID_DEPARTAMENTO: number
        }
        Insert: {
          DEPARTAMENTO?: string | null
          ID_DEPARTAMENTO?: number
        }
        Update: {
          DEPARTAMENTO?: string | null
          ID_DEPARTAMENTO?: number
        }
        Relationships: []
      }
      TBL_DESC_POR_PROD: {
        Row: {
          ID_DESC_PROD: number
          ID_DESCUENTO: number
          ID_PRODUCTO: number
        }
        Insert: {
          ID_DESC_PROD?: number
          ID_DESCUENTO: number
          ID_PRODUCTO: number
        }
        Update: {
          ID_DESC_PROD?: number
          ID_DESCUENTO?: number
          ID_PRODUCTO?: number
        }
        Relationships: [
          {
            foreignKeyName: "TBL_DESC_POR_PROD_ID_DESCUENTO_fkey"
            columns: ["ID_DESCUENTO"]
            isOneToOne: false
            referencedRelation: "TBL_DESCUENTOS"
            referencedColumns: ["ID_DESCUENTO"]
          },
          {
            foreignKeyName: "TBL_DESC_POR_PROD_ID_PRODUCTO_fkey"
            columns: ["ID_PRODUCTO"]
            isOneToOne: false
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_DESCUENTOS: {
        Row: {
          DESCRIPCION: string | null
          DESCUENTO: number | null
          ID_DESCUENTO: number
        }
        Insert: {
          DESCRIPCION?: string | null
          DESCUENTO?: number | null
          ID_DESCUENTO?: number
        }
        Update: {
          DESCRIPCION?: string | null
          DESCUENTO?: number | null
          ID_DESCUENTO?: number
        }
        Relationships: []
      }
      TBL_DIFICULTAD: {
        Row: {
          DIFICULTAD: string | null
          ID_DIFICULTAD: number
        }
        Insert: {
          DIFICULTAD?: string | null
          ID_DIFICULTAD?: number
        }
        Update: {
          DIFICULTAD?: string | null
          ID_DIFICULTAD?: number
        }
        Relationships: []
      }
      TBL_ESTADO_FACT: {
        Row: {
          ESTADO_FACT: string | null
          ID_ESTADO_FACT: number
        }
        Insert: {
          ESTADO_FACT?: string | null
          ID_ESTADO_FACT?: number
        }
        Update: {
          ESTADO_FACT?: string | null
          ID_ESTADO_FACT?: number
        }
        Relationships: []
      }
      TBL_FACTURAS: {
        Row: {
          CODIGO_FACT: string | null
          DIRECCION: string | null
          FECHA_FACT: string | null
          ID_CIUDAD: number | null
          ID_ESTADO_FACT: number
          ID_FACTURA: number
          ID_USUARIO: number
          IMPUESTO: number | null
          PRECIO_ENVIO: number | null
          SUBTOTAL: number | null
          TOTAL: number | null
        }
        Insert: {
          CODIGO_FACT?: string | null
          DIRECCION?: string | null
          FECHA_FACT?: string | null
          ID_CIUDAD?: number | null
          ID_ESTADO_FACT: number
          ID_FACTURA?: number
          ID_USUARIO: number
          IMPUESTO?: number | null
          PRECIO_ENVIO?: number | null
          SUBTOTAL?: number | null
          TOTAL?: number | null
        }
        Update: {
          CODIGO_FACT?: string | null
          DIRECCION?: string | null
          FECHA_FACT?: string | null
          ID_CIUDAD?: number | null
          ID_ESTADO_FACT?: number
          ID_FACTURA?: number
          ID_USUARIO?: number
          IMPUESTO?: number | null
          PRECIO_ENVIO?: number | null
          SUBTOTAL?: number | null
          TOTAL?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_FACTURAS_ID_CIUDAD_fkey"
            columns: ["ID_CIUDAD"]
            isOneToOne: false
            referencedRelation: "TBL_CIUDADES"
            referencedColumns: ["ID_CIUDAD"]
          },
          {
            foreignKeyName: "TBL_FACTURAS_ID_ESTADO_FACT_fkey"
            columns: ["ID_ESTADO_FACT"]
            isOneToOne: false
            referencedRelation: "TBL_ESTADO_FACT"
            referencedColumns: ["ID_ESTADO_FACT"]
          },
          {
            foreignKeyName: "TBL_FACTURAS_ID_USUARIO_fkey"
            columns: ["ID_USUARIO"]
            isOneToOne: false
            referencedRelation: "TBL_USUARIOS"
            referencedColumns: ["ID_USUARIO"]
          },
        ]
      }
      TBL_GROSORES: {
        Row: {
          GROSOR: string | null
          ID_GROSOR: number
        }
        Insert: {
          GROSOR?: string | null
          ID_GROSOR?: number
        }
        Update: {
          GROSOR?: string | null
          ID_GROSOR?: number
        }
        Relationships: []
      }
      TBL_GROSORES_POR_LANA: {
        Row: {
          CANTIDAD_POR_GROSOR: number | null
          ID_GROSOR: number | null
          ID_GROSOR_LANA: number
          ID_LANA: number | null
          PRECIO_VENTA_G: number | null
        }
        Insert: {
          CANTIDAD_POR_GROSOR?: number | null
          ID_GROSOR?: number | null
          ID_GROSOR_LANA?: number
          ID_LANA?: number | null
          PRECIO_VENTA_G?: number | null
        }
        Update: {
          CANTIDAD_POR_GROSOR?: number | null
          ID_GROSOR?: number | null
          ID_GROSOR_LANA?: number
          ID_LANA?: number | null
          PRECIO_VENTA_G?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_GROSORES_POR_LANA_ID_GROSOR_fkey"
            columns: ["ID_GROSOR"]
            isOneToOne: false
            referencedRelation: "TBL_GROSORES"
            referencedColumns: ["ID_GROSOR"]
          },
          {
            foreignKeyName: "TBL_GROSORES_POR_LANA_ID_LANA_fkey"
            columns: ["ID_LANA"]
            isOneToOne: false
            referencedRelation: "TBL_MATERIALES"
            referencedColumns: ["ID_MATERIAL"]
          },
        ]
      }
      TBL_IMAGENES: {
        Row: {
          DESCRIPCION_I: string | null
          ID_IMAGEN: number
          URL: string | null
        }
        Insert: {
          DESCRIPCION_I?: string | null
          ID_IMAGEN?: number
          URL?: string | null
        }
        Update: {
          DESCRIPCION_I?: string | null
          ID_IMAGEN?: number
          URL?: string | null
        }
        Relationships: []
      }
      TBL_IMAGS_POR_PROD: {
        Row: {
          ID_IMAGEN: number
          ID_IMG_PROD: number
          ID_PRODUCTO: number
          IMG_PRINCIPAL: boolean | null
        }
        Insert: {
          ID_IMAGEN: number
          ID_IMG_PROD?: number
          ID_PRODUCTO: number
          IMG_PRINCIPAL?: boolean | null
        }
        Update: {
          ID_IMAGEN?: number
          ID_IMG_PROD?: number
          ID_PRODUCTO?: number
          IMG_PRINCIPAL?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_IMAGS_POR_PROD_ID_IMAGEN_fkey"
            columns: ["ID_IMAGEN"]
            isOneToOne: false
            referencedRelation: "TBL_IMAGENES"
            referencedColumns: ["ID_IMAGEN"]
          },
          {
            foreignKeyName: "TBL_IMAGS_POR_PROD_ID_PRODUCTO_fkey"
            columns: ["ID_PRODUCTO"]
            isOneToOne: false
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_KEYWORDS: {
        Row: {
          ID_KEYWORD: number
          KEYWORD: string | null
        }
        Insert: {
          ID_KEYWORD?: number
          KEYWORD?: string | null
        }
        Update: {
          ID_KEYWORD?: number
          KEYWORD?: string | null
        }
        Relationships: []
      }
      TBL_KEYWORDS_POR_PROD: {
        Row: {
          ID_KEY_POR_PROD: number
          ID_KEYWORD: number | null
          ID_PRODUCTO: number | null
        }
        Insert: {
          ID_KEY_POR_PROD?: number
          ID_KEYWORD?: number | null
          ID_PRODUCTO?: number | null
        }
        Update: {
          ID_KEY_POR_PROD?: number
          ID_KEYWORD?: number | null
          ID_PRODUCTO?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_KEYWORDS_POR_PROD_ID_KEYWORD_fkey"
            columns: ["ID_KEYWORD"]
            isOneToOne: false
            referencedRelation: "TBL_KEYWORDS"
            referencedColumns: ["ID_KEYWORD"]
          },
          {
            foreignKeyName: "TBL_KEYWORDS_POR_PROD_ID_PRODUCTO_fkey"
            columns: ["ID_PRODUCTO"]
            isOneToOne: false
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_KITS: {
        Row: {
          ID_KIT: number
          ID_TUTORIAL: number
        }
        Insert: {
          ID_KIT: number
          ID_TUTORIAL: number
        }
        Update: {
          ID_KIT?: number
          ID_TUTORIAL?: number
        }
        Relationships: [
          {
            foreignKeyName: "TBL_KITS_ID_KIT_fkey"
            columns: ["ID_KIT"]
            isOneToOne: true
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
          {
            foreignKeyName: "TBL_KITS_ID_TUTORIAL_fkey"
            columns: ["ID_TUTORIAL"]
            isOneToOne: false
            referencedRelation: "TBL_TUTORIALES"
            referencedColumns: ["ID_TUTORIAL"]
          },
        ]
      }
      TBL_MARCAS: {
        Row: {
          ID_MARCA: number
          MARCA: string | null
        }
        Insert: {
          ID_MARCA?: number
          MARCA?: string | null
        }
        Update: {
          ID_MARCA?: number
          MARCA?: string | null
        }
        Relationships: []
      }
      TBL_MATERIALES: {
        Row: {
          ID_CATEGORIA: number | null
          ID_MARCA: number | null
          ID_MATERIAL: number
        }
        Insert: {
          ID_CATEGORIA?: number | null
          ID_MARCA?: number | null
          ID_MATERIAL: number
        }
        Update: {
          ID_CATEGORIA?: number | null
          ID_MARCA?: number | null
          ID_MATERIAL?: number
        }
        Relationships: [
          {
            foreignKeyName: "TBL_MATERIALES_ID_CATEGORIA_fkey"
            columns: ["ID_CATEGORIA"]
            isOneToOne: false
            referencedRelation: "TBL_CATEGORIAS_MAT"
            referencedColumns: ["ID_CATEGORIA"]
          },
          {
            foreignKeyName: "TBL_MATERIALES_ID_MARCA_fkey"
            columns: ["ID_MARCA"]
            isOneToOne: false
            referencedRelation: "TBL_MARCAS"
            referencedColumns: ["ID_MARCA"]
          },
          {
            foreignKeyName: "TBL_MATERIALES_ID_MATERIAL_fkey"
            columns: ["ID_MATERIAL"]
            isOneToOne: true
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_PAGOS: {
        Row: {
          ESTADO: string | null
          FECHA: string | null
          ID_FACTURA: number | null
          ID_ORDEN_PAYPAL: string | null
          ID_PAGO: number
          MONTO: number | null
        }
        Insert: {
          ESTADO?: string | null
          FECHA?: string | null
          ID_FACTURA?: number | null
          ID_ORDEN_PAYPAL?: string | null
          ID_PAGO?: number
          MONTO?: number | null
        }
        Update: {
          ESTADO?: string | null
          FECHA?: string | null
          ID_FACTURA?: number | null
          ID_ORDEN_PAYPAL?: string | null
          ID_PAGO?: number
          MONTO?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_PAGOS_ID_FACTURA_fkey"
            columns: ["ID_FACTURA"]
            isOneToOne: false
            referencedRelation: "TBL_FACTURAS"
            referencedColumns: ["ID_FACTURA"]
          },
        ]
      }
      TBL_PATRONES: {
        Row: {
          ID_PATRON: number
          NOMBRE_PATRON: string | null
          URL: string | null
        }
        Insert: {
          ID_PATRON?: number
          NOMBRE_PATRON?: string | null
          URL?: string | null
        }
        Update: {
          ID_PATRON?: number
          NOMBRE_PATRON?: string | null
          URL?: string | null
        }
        Relationships: []
      }
      TBL_PERMISOS: {
        Row: {
          ID_PERMISO: number
          ID_USUARIO: number
          PERMISO: string | null
        }
        Insert: {
          ID_PERMISO?: number
          ID_USUARIO: number
          PERMISO?: string | null
        }
        Update: {
          ID_PERMISO?: number
          ID_USUARIO?: number
          PERMISO?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_PERMISOS_ID_USUARIO_fkey"
            columns: ["ID_USUARIO"]
            isOneToOne: false
            referencedRelation: "TBL_USUARIOS"
            referencedColumns: ["ID_USUARIO"]
          },
        ]
      }
      TBL_PROD_POR_FACT: {
        Row: {
          CANTIDAD_COMPRA: number | null
          GROSOR: string | null
          ID_FACTURA: number
          ID_PROD_FACT: number
          ID_PRODUCTO: number
          SUBTOTAL: number | null
          TALLA: string | null
        }
        Insert: {
          CANTIDAD_COMPRA?: number | null
          GROSOR?: string | null
          ID_FACTURA: number
          ID_PROD_FACT?: number
          ID_PRODUCTO: number
          SUBTOTAL?: number | null
          TALLA?: string | null
        }
        Update: {
          CANTIDAD_COMPRA?: number | null
          GROSOR?: string | null
          ID_FACTURA?: number
          ID_PROD_FACT?: number
          ID_PRODUCTO?: number
          SUBTOTAL?: number | null
          TALLA?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_PROD_POR_FACT_ID_FACTURA_fkey"
            columns: ["ID_FACTURA"]
            isOneToOne: false
            referencedRelation: "TBL_FACTURAS"
            referencedColumns: ["ID_FACTURA"]
          },
          {
            foreignKeyName: "TBL_PROD_POR_FACT_ID_PRODUCTO_fkey"
            columns: ["ID_PRODUCTO"]
            isOneToOne: false
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_PRODUCTOS: {
        Row: {
          CANTIDAD_DISP: number | null
          DESCRIPCION: string | null
          FECHA_CREACION: string | null
          ID_COLOR: number | null
          ID_PRODUCTO: number
          ID_TIPO_PROD: number
          NOMBRE_PROD: string | null
          PRECIO_VENTA: number | null
        }
        Insert: {
          CANTIDAD_DISP?: number | null
          DESCRIPCION?: string | null
          FECHA_CREACION?: string | null
          ID_COLOR?: number | null
          ID_PRODUCTO?: number
          ID_TIPO_PROD: number
          NOMBRE_PROD?: string | null
          PRECIO_VENTA?: number | null
        }
        Update: {
          CANTIDAD_DISP?: number | null
          DESCRIPCION?: string | null
          FECHA_CREACION?: string | null
          ID_COLOR?: number | null
          ID_PRODUCTO?: number
          ID_TIPO_PROD?: number
          NOMBRE_PROD?: string | null
          PRECIO_VENTA?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_PRODUCTOS_ID_COLOR_fkey"
            columns: ["ID_COLOR"]
            isOneToOne: false
            referencedRelation: "TBL_COLORES"
            referencedColumns: ["ID_COLOR"]
          },
          {
            foreignKeyName: "TBL_PRODUCTOS_ID_TIPO_PROD_fkey"
            columns: ["ID_TIPO_PROD"]
            isOneToOne: false
            referencedRelation: "TBL_TIPOS_PRODUCTO"
            referencedColumns: ["ID_TIPO"]
          },
        ]
      }
      TBL_TALLAS: {
        Row: {
          ID_TALLA: number
          TALLA: string | null
        }
        Insert: {
          ID_TALLA?: number
          TALLA?: string | null
        }
        Update: {
          ID_TALLA?: number
          TALLA?: string | null
        }
        Relationships: []
      }
      TBL_TALLAS_POR_PROD: {
        Row: {
          CANTIDAD_POR_TALLA: number | null
          COLOR: string | null
          ID_PRODUCTO: number | null
          ID_TALLA: number | null
          ID_TALLA_PROD: number
          PRECIO_VENTA_T: number | null
        }
        Insert: {
          CANTIDAD_POR_TALLA?: number | null
          COLOR?: string | null
          ID_PRODUCTO?: number | null
          ID_TALLA?: number | null
          ID_TALLA_PROD?: number
          PRECIO_VENTA_T?: number | null
        }
        Update: {
          CANTIDAD_POR_TALLA?: number | null
          COLOR?: string | null
          ID_PRODUCTO?: number | null
          ID_TALLA?: number | null
          ID_TALLA_PROD?: number
          PRECIO_VENTA_T?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_TALLAS_POR_PROD_ID_PRODUCTO_fkey"
            columns: ["ID_PRODUCTO"]
            isOneToOne: false
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
          {
            foreignKeyName: "TBL_TALLAS_POR_PROD_ID_TALLA_fkey"
            columns: ["ID_TALLA"]
            isOneToOne: false
            referencedRelation: "TBL_TALLAS"
            referencedColumns: ["ID_TALLA"]
          },
        ]
      }
      TBL_TIPOS_PRODUCTO: {
        Row: {
          ID_TIPO: number
          TIPO_PROD: string | null
        }
        Insert: {
          ID_TIPO?: number
          TIPO_PROD?: string | null
        }
        Update: {
          ID_TIPO?: number
          TIPO_PROD?: string | null
        }
        Relationships: []
      }
      TBL_TUTORIALES: {
        Row: {
          DURACION: string | null
          ID_DIFICULTAD: number
          ID_PATRON: number
          ID_TUTORIAL: number
          URL: string | null
        }
        Insert: {
          DURACION?: string | null
          ID_DIFICULTAD: number
          ID_PATRON: number
          ID_TUTORIAL: number
          URL?: string | null
        }
        Update: {
          DURACION?: string | null
          ID_DIFICULTAD?: number
          ID_PATRON?: number
          ID_TUTORIAL?: number
          URL?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_TUTORIALES_ID_DIFICULTAD_fkey"
            columns: ["ID_DIFICULTAD"]
            isOneToOne: false
            referencedRelation: "TBL_DIFICULTAD"
            referencedColumns: ["ID_DIFICULTAD"]
          },
          {
            foreignKeyName: "TBL_TUTORIALES_ID_PATRON_fkey"
            columns: ["ID_PATRON"]
            isOneToOne: false
            referencedRelation: "TBL_PATRONES"
            referencedColumns: ["ID_PATRON"]
          },
          {
            foreignKeyName: "TBL_TUTORIALES_ID_TUTORIAL_fkey"
            columns: ["ID_TUTORIAL"]
            isOneToOne: true
            referencedRelation: "TBL_PRODUCTOS"
            referencedColumns: ["ID_PRODUCTO"]
          },
        ]
      }
      TBL_TUTORIALES_US: {
        Row: {
          FECHA_ADQUISICION: string | null
          ID_TUT_USU: number
          ID_TUTORIAL: number
          ID_USUARIO: number
        }
        Insert: {
          FECHA_ADQUISICION?: string | null
          ID_TUT_USU?: number
          ID_TUTORIAL: number
          ID_USUARIO: number
        }
        Update: {
          FECHA_ADQUISICION?: string | null
          ID_TUT_USU?: number
          ID_TUTORIAL?: number
          ID_USUARIO?: number
        }
        Relationships: [
          {
            foreignKeyName: "TBL_TUTORIALES_US_ID_TUTORIAL_fkey"
            columns: ["ID_TUTORIAL"]
            isOneToOne: false
            referencedRelation: "TBL_TUTORIALES"
            referencedColumns: ["ID_TUTORIAL"]
          },
          {
            foreignKeyName: "TBL_TUTORIALES_US_ID_USUARIO_fkey"
            columns: ["ID_USUARIO"]
            isOneToOne: false
            referencedRelation: "TBL_USUARIOS"
            referencedColumns: ["ID_USUARIO"]
          },
        ]
      }
      TBL_USUARIOS: {
        Row: {
          APELLIDO: string
          CONTRASENA: string
          CORREO: string
          FECHA_NACIMIENTO: string | null
          GENERO: string | null
          ID_IMG_PERFIL: number | null
          ID_USUARIO: number
          NOMBRE: string
          TELEFONO: string | null
        }
        Insert: {
          APELLIDO: string
          CONTRASENA: string
          CORREO: string
          FECHA_NACIMIENTO?: string | null
          GENERO?: string | null
          ID_IMG_PERFIL?: number | null
          ID_USUARIO?: number
          NOMBRE: string
          TELEFONO?: string | null
        }
        Update: {
          APELLIDO?: string
          CONTRASENA?: string
          CORREO?: string
          FECHA_NACIMIENTO?: string | null
          GENERO?: string | null
          ID_IMG_PERFIL?: number | null
          ID_USUARIO?: number
          NOMBRE?: string
          TELEFONO?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TBL_USUARIOS_ID_IMG_PERFIL_fkey"
            columns: ["ID_IMG_PERFIL"]
            isOneToOne: false
            referencedRelation: "TBL_IMAGENES"
            referencedColumns: ["ID_IMAGEN"]
          },
        ]
      }
      TBL_VERIFICACIONES_US: {
        Row: {
          CODIGO_VERI: string | null
          DESCRIPCION: string | null
          ESTADO_VERI: boolean | null
          FECHA_VALIDACION: string
          ID_USUARIO: number
          ID_VERIFICACION: number
        }
        Insert: {
          CODIGO_VERI?: string | null
          DESCRIPCION?: string | null
          ESTADO_VERI?: boolean | null
          FECHA_VALIDACION?: string
          ID_USUARIO: number
          ID_VERIFICACION?: number
        }
        Update: {
          CODIGO_VERI?: string | null
          DESCRIPCION?: string | null
          ESTADO_VERI?: boolean | null
          FECHA_VALIDACION?: string
          ID_USUARIO?: number
          ID_VERIFICACION?: number
        }
        Relationships: [
          {
            foreignKeyName: "TBL_VERIFICACIONES_US_ID_USUARIO_fkey"
            columns: ["ID_USUARIO"]
            isOneToOne: false
            referencedRelation: "TBL_USUARIOS"
            referencedColumns: ["ID_USUARIO"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_producto_info: {
        Args: {
          p_id_producto: number
        }
        Returns: {
          id_producto: number
          nombre_prod: string
          precio_venta: number
          descripcion: string
          cantidad_disp: number
          tipo_prod: string
          color: string
          tallas: string[]
          imagen_principal: string
          imagenes_extra: string[]
          grosores: string[]
          cantidad_por_grosor: number[]
          nombre_marca: string
        }[]
      }
      p_actualizar_carrito: {
        Args: {
          p_correo_usuario: string
          p_nueva_cantidad: number
          p_id_producto: number
        }
        Returns: Record<string, unknown>
      }
      p_actualizar_foto: {
        Args: {
          p_correo: string
          p_nueva_url_imagen: string
        }
        Returns: Record<string, unknown>
      }
      p_actualizar_usuario: {
        Args: {
          p_correo: string
          p_nuevo_nombre: string
          p_nuevo_apellido: string
          p_nuevo_genero: string
          p_nuevo_telefono: string
          p_nueva_fecha_nacimiento: string
        }
        Returns: Record<string, unknown>
      }
      p_buscar_videos_por_usuario: {
        Args: {
          p_correo: string
          p_columna_ordenamiento?: string
          p_direccion_ordenamiento?: string
        }
        Returns: {
          CORREO: string
          ID_PRODUCTO: number
          NOMBRE_PROD: string
          DIFICULTAD: string
          URL: string
        }[]
      }
      p_contrasena_segura: {
        Args: {
          v_contrasena: string
        }
        Returns: Record<string, unknown>
      }
      p_eliminar_carrito: {
        Args: {
          p_id_factura: number
        }
        Returns: Record<string, unknown>
      }
      p_eliminar_producto_carrito: {
        Args: {
          p_correo_usuario: string
          p_id_producto: number
        }
        Returns: Record<string, unknown>
      }
      p_facturacion: {
        Args: {
          p_id_orden: string
          p_id_factura: number
          p_estado_orden: string
        }
        Returns: Record<string, unknown>
      }
      p_filtrar_ordenar_por_popularidad: {
        Args: {
          p_id_tipo_producto: number
        }
        Returns: {
          ID_PRODUCTO: number
          NOMBRE_PROD: string
          PRECIO_VENTA: number
          URL: string
        }[]
      }
      p_filtrar_productos_por_categoria_y_precio: {
        Args: {
          p_tipo_prod: string
          p_categorias: string[]
          p_min_precio?: number
          p_max_precio?: number
        }
        Returns: {
          id_producto: number
          nombre_prod: string
          precio_venta: number
          imagen_principal: string
          categorias: string
        }[]
      }
      p_generar_nuevo_codigo: {
        Args: {
          p_email: string
          p_code: string
        }
        Returns: Record<string, unknown>
      }
      p_get_detalle_factura: {
        Args: {
          p_id_factura: number
        }
        Returns: {
          codigo_fact: string
          fecha_fact: string
          total: number
          nombre_prod: string
          precio_prod: number
        }[]
      }
      p_get_facturas_usuario: {
        Args: {
          p_correo: string
          p_columna_ordenamiento?: string
          p_direccion_ordenamiento?: string
        }
        Returns: {
          id_factura: number
          codigo_fact: string
          total: number
          fecha_fact: string
          productos: string
        }[]
      }
      p_get_similar_products: {
        Args: {
          p_id_producto: number
        }
        Returns: {
          ID_PRODUCTO: number
          NOMBRE_PROD: string
          PRECIO_VENTA: number
          IMG_PRINCIPAL: string
        }[]
      }
      p_get_usuario: {
        Args: {
          p_correo: string
        }
        Returns: Record<string, unknown>
      }
      p_insert_usuario_verificacion: {
        Args: {
          p_nombre: string
          p_apellido: string
          p_correo: string
          p_genero: string
          p_contrasena: string
          p_telefono: string
          p_fecha_nacimiento: string
          p_codigo_veri: string
          p_descripcion: string
        }
        Returns: Record<string, unknown>
      }
      p_insertar_producto_a_carrito: {
        Args: {
          p_correo_usuario: string
          p_id_producto: number
          p_cantidad_compra: number
          p_talla: string
          p_grosor: string
        }
        Returns: Record<string, unknown>
      }
      p_insertar_verificacion_restablecer_contrasena: {
        Args: {
          p_correo: string
          p_codigo_veri: string
        }
        Returns: Record<string, unknown>
      }
      p_llenar_materiales: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      p_llenar_productos: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      p_login: {
        Args: {
          p_correo: string
          p_contrasena: string
        }
        Returns: Record<string, unknown>
      }
      p_obtener_carrito: {
        Args: {
          p_correo_usuario: string
        }
        Returns: {
          id_factura: number
          id_prod_fact: number
          id_producto: number
          nombre_prod: string
          cantidad_compra: number
          grosor: string
          talla: string
          subtotal: number
          url: string
        }[]
      }
      p_obtener_ciudades: {
        Args: {
          p_id_departamento: number
        }
        Returns: {
          ID_CIUDAD: number
          DEPARTAMENTO: string
          CIUDAD: string
        }[]
      }
      p_obtener_departamentos: {
        Args: Record<PropertyKey, never>
        Returns: {
          ID_DEPARTAMENTO: number
          DEPARTAMENTO: string
        }[]
      }
      p_obtener_envio: {
        Args: {
          p_id_factura: number
          p_direccion: string
          p_id_ciudad: number
        }
        Returns: Record<string, unknown>
      }
      p_obtener_subtotal_impuestos_carrito: {
        Args: {
          p_correo_usuario: string
        }
        Returns: Record<string, unknown>
      }
      p_obtener_todas_las_categorias: {
        Args: Record<PropertyKey, never>
        Returns: {
          ID_CATEGORIA: number
          CATEGORIA: string
        }[]
      }
      p_obtener_todas_las_categorias_materiales: {
        Args: Record<PropertyKey, never>
        Returns: {
          ID_CATEGORIA: number
          CATEGORIA: string
        }[]
      }
      p_ordenar_materiales_por_categoria_y_precio: {
        Args: {
          p_tipo_prod: string
          p_categorias_mat?: string[]
          p_min_precio?: number
          p_max_precio?: number
          p_columna_ordenamiento?: string
          p_direccion_ordenamiento?: string
        }
        Returns: {
          id_producto: number
          nombre_prod: string
          precio_venta: number
          imagen_principal: string
          categorias_mat: string
          stock: number
        }[]
      }
      p_ordenar_productos_por_categoria_y_precio: {
        Args: {
          p_tipo_prod: string
          p_categorias?: string[]
          p_min_precio?: number
          p_max_precio?: number
          p_columna_ordenamiento?: string
          p_direccion_ordenamiento?: string
        }
        Returns: {
          id_producto: number
          nombre_prod: string
          precio_venta: number
          imagen_principal: string
          categorias: string
          stock: number
        }[]
      }
      p_productos_desroden: {
        Args: {
          p_tipo_prod: string
        }
        Returns: {
          id_producto: number
          nombre_prod: string
          precio_venta: number
          imagen_principal: string
          categorias: string
          stock: number
        }[]
      }
      p_restablecer_contrasena: {
        Args: {
          p_correo: string
          p_nueva_contrasena: string
        }
        Returns: Record<string, unknown>
      }
      p_verify_code: {
        Args: {
          p_email: string
          p_code: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
