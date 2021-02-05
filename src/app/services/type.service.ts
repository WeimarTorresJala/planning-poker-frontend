import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IType } from '../interfaces/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  URI = 'http://localhost:3000/api/types'

  constructor(private http: HttpClient) { }

  getType(typeId: string) {
    return this.http.get<IType>(`${this.URI}/${typeId}`);
  }

  getTypes() {
    return this.http.get<IType[]>(this.URI);
  }
}
