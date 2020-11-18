//import { HttpClientModule } from '@angular/common/http';
//import { HttpClient} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Game } from 'src/app/game';
import { GameService } from 'src/app/gameservice';

@Component({
  selector: 'app-management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css'],
  
  providers: [MessageService,ConfirmationService]
})

//implements OnInit 
export class ManagementTableComponent implements OnInit {

    constructor(private GameService: GameService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
    
    gameDialog:boolean;

    games: Game[];
    
    game: Game;
    
    selectedGames: Game[];
    
    submitted:boolean;
    
    
    //GameService: GameService;
    
    ngOnInit() {
        
        console.log("teste antes")
        this.getGames();
        console.log("teste depois")
        
        /*
        this.getGames();
        then(data => this.games = data);
        */
    }
    
    getGames2(){
        console.log("funciona getGame2");
        this.GameService.getGames2();
    }
    
    getGames(){

        //console.log("antes do service")
        /*
        var teste = "teste 50" 
        console.log(teste);
        return  teste;

        */
        var teste;
        
        this.GameService.getGames().subscribe( (data) => {
            console.log(data);
        });  

        //console.log("depois do service")
    }

/*
    openNew() {
        this.game = {};
        this.submitted = false;
        this.gameDialog = true;
    }

*/
  /*
  gameDialog: boolean;

  games: game[];

  game: game;

  selectedgames: game[];

  submitted: boolean;

  constructor(private gameService: gameService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  deleteSelectedgames() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected games?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.games = this.games.filter(val => !this.selectedgames.includes(val));
              this.selectedgames = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'games Deleted', life: 3000});
          }
      });
  }

  editgame(game: game) {
      this.game = {...game};
      this.gameDialog = true;
  }

  deletegame(game: game) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + game.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.games = this.games.filter(val => val.id !== game.id);
              this.game = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'game Deleted', life: 3000});
          }
      });
  }

  hideDialog() {
      this.gameDialog = false;
      this.submitted = false;
  }
  
    savegame() {
        this.submitted = true;

        if (this.game.name.trim()) {
            if (this.game.id) {
                this.games[this.findIndexById(this.game.id)] = this.game;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'game Updated', life: 3000});
            }
            else {
                this.game.id = this.createId();
                this.game.image = 'game-placeholder.svg';
                this.games.push(this.game);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'game Created', life: 3000});
            }

            this.games = [...this.games];
            this.gameDialog = false;
            this.game = {};
        }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.games.length; i++) {
          if (this.games[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
*/
}
