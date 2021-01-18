import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { parse } from "path";
import { Observable } from "rxjs";
import { find, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = 'https://royalestate-53406-default-rtdb.firebaseio.com/';
    private locationsUrl = 'locations.json';
    private estatesDataUrl = 'locations-data.json';

    constructor(private readonly http: HttpClient) { }

    public getLocations(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}${this.locationsUrl}`);
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
                    console.log(id);
                    console.log(Object.values(e));    
                    Object.values(e).forEach((estate) => {
                        const data = estate.estates.find(element => element.id === parseInt(id));
                        if (data) {
                            foundEstate = data;
                        }
                        console.log('estate',foundEstate);
                    });
                    
                    return foundEstate;
                }),
                tap(console.log)
            );
    }
}