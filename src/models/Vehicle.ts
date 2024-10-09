import { Localization } from "./Localization"


export interface Vehicle{
    vehicleId: number
    brandName: string
    modelName: string
    categoryName: string
    motorizationName: string
    stateName: string
    pictureUrl: string
    localization: Localization
    color: string
    seatsNumber: number
    cO2: number
    modelYear: number
    immatriculation: string
}