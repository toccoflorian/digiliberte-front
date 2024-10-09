import { Vehicle } from "./Vehicle"


export interface Category{
    
    id: number
    name: string
    SeatsNumber: number
    Vehicles: Vehicle[]
}