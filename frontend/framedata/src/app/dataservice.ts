import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';

import { Game } from './game';

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) {
    
  }
  
  private urlApi = 'http://localhost:3000/api/data/';
  
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
  
  getSchema(gameName):Observable<any>{
    let urlGetSchema = this.urlApi + gameName + '/Data-Schema'
    console.log(urlGetSchema);
    console.log("dentro de getSchema no dataservice")
    let resposta = this.http.get<any>(urlGetSchema).pipe(retry(3),catchError(this.handleError));
    return resposta;
  }

  putGame(gameName, gameNameNew):Observable<any>{
    //  let options = "param:{ name: " + gameName+ ",newname:" + gameNameNew " }";
    console.log(gameNameNew +" <= NOVO || VELHO => "+ gameName + " Dentro do gameservice.putgame ");

    const params = { params : new HttpParams().set('name', gameName).set('newname',gameNameNew) };
    const urlPut = this.urlApi + gameName+'/'+gameNameNew;
    console.log(urlPut);

    let resposta = this.http.put(urlPut,{"mensagem":"temporaria"});
    return resposta;
  }

  deleteGame(gameName):Observable<any>{
    console.log("Dentro do serviço deleteGame" + gameName);
    const urlDelete = this.urlApi + gameName  ;
    let resposta = this.http.delete<any>(urlDelete).pipe(retry(3),catchError(this.handleError));

    return resposta ;

  }

  postGame(gameName):Observable<any>{
    console.log("Dentro do serviço postGame gameName => " + gameName);
    const urlPost = this.urlApi+gameName;
    let resposta = this.http.post<any>(urlPost,{"mensagem":"temporaria"}).pipe(retry(3),catchError(this.handleError));
 
    return resposta;
  }
        /*
        .pipe(retry(3),catchError(this.handleError));

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