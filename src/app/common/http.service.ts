import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private baseUrl = 'https://royalestate-53406-default-rtdb.firebaseio.com/';

    constructor(private readonly http: HttpClient) { }

    public getLocations(): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'locations.json');
    }
}