import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Game } from './game';

@Injectable()
export class GameService {

    constructor(private http: HttpClient) {

    }


    getGames(){
        
        var teste = "mensagem de teste";
        
        return teste;
        /*

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
        */
    }
    
}