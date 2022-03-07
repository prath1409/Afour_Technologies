import { Request } from "express"
import { type } from "os"
export interface IGetUserAuthInfoRequest extends Request {
  user: User // or any other type
}

// It is an interface used for declaring type in jwt user
export type User = {
    id?: string,
    role?: string,
    name?: string,
    email?: string
}
export type Book = {
  id: string,
  name: string,
  available_count?: number,
  issued_count?: number
}
export interface Users{
  status: number,
  message?: string,
  user?: User
}

export interface Books{
  status: number,
  message?: string,
  book?: Book,
  books?: Book[]
}
