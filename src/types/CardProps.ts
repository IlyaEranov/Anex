import type { date } from "./DateType"

export interface CardProps{
  id: string
  path?: string
  name?: string
  country?: string
  city?: string
  date?: date
  price?: number
  image?: string
  rating?: number
}