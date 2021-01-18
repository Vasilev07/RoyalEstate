import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EstateService {
    public estates = new ReplaySubject();
}