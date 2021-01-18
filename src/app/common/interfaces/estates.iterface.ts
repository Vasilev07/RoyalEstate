import { IEstate } from "./estate.interface";
import { ILocation } from "./locations.interface";

export interface IEstates {
    estates: IEstate[];
    location: ILocation;
}