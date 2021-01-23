import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ILocation } from "./interfaces/locations.interface";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = 'https://royalestate-53406-default-rtdb.firebaseio.com/';
    private locationsUrl = 'locations.json';
    private estatesDataUrl = 'locations-data.json';

    constructor(private readonly http: HttpClient) { }

    public getLocations(): Observable<any> {
        return this.http.get<ILocation>(`${this.baseUrl}${this.locationsUrl}`);
    }

    public getEstates(): Observable<any> {
        return this.http.get(`${this.baseUrl}${this.estatesDataUrl}`)
            .pipe(
                map((data) => Object.values(data)),
            );
    }

    public getEstate(id: string) {
        return this.http.get(`${this.baseUrl}${this.estatesDataUrl}`)
            .pipe(
                map((e) => {
                    let foundEstate;  
                    Object.values(e).forEach((estate) => {
                        const data = estate.estates.find(element => element.id === parseInt(id));
                        if (data) {
                            foundEstate = data;
                        }

                    });
                    
                    return foundEstate;
                }),
            );
    }
}