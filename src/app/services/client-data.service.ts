import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { IndividualRegistration } from '../model/individual-registration';

@Injectable()
export class ClientDataService {
  private registrationAPI = environment.registrationAPIUrl;

  constructor(private httpClient: HttpClient) {}

  fetchIndividual(id: string) {
    const url = this.registrationAPI + id;
    return this.httpClient.get<IndividualRegistration>(url)
      .map(response => response)
      .catch((error: Response) => Observable.throw(error));
  }

  registerIndividual(registration: IndividualRegistration) {
    return this.httpClient.post<IndividualRegistration>(this.registrationAPI, registration)
      .map(response => response)
      .catch((error: Response) => Observable.throw(error));
  }
}
