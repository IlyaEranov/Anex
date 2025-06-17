import type { date } from "./DateType"

export interface CardProps{
  id?: string
  path?: string
  name?: string
  hotel?: string
  country?: string
  city?: string
  date?: date
  price?: number
  image?: string
  hotelRating?: number
  rating?: number
  gender?: "male" | "female"
  comment?: string
}