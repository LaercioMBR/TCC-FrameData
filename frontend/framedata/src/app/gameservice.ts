import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';

import { Game } from './game';

@Injectable()
export class GameService {
  
  constructor(private http: HttpClient) {
    
  }
  
  private urlApi = 'localhost:3000/api/games';
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  async getGames2():Promise<any>{
  
    try { const testreturn = await this.http.get<any>(this.urlApi).toPromise();
      return testreturn;
    } catch (error) {
      console.log(error)
    }

  }
  
  getGames():Observable<any>{
        
    var teste = "mensagem de teste";
        
    console.log(teste);

    let resposta = this.http.get<any>(this.urlApi).pipe( take(1));

    console.log(resposta);

    return resposta;
  }
        /*
        .pipe(  retry(3),catchError(this.handleError));

        .toPromise()
        this.http.get<any>("localhost:3000/api/games").subscribe(data => {

            console.log(data);
            teste = data; 
        });
        
        */
        /*

        this.http.get<any>('/api/games');

        return this.http.get<any>('localhost:3000/games')
        .toPromise()
        .then(res => <Game[]>res.data)
        .then(data => { return data; });

        .pipe(retry(3),catchError(this.handleError))
        */
    

    
}