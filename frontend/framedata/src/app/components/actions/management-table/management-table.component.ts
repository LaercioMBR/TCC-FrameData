//import { HttpClientModule } from '@angular/common/http';
//import { HttpClient} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Game } from 'src/app/game';
import { GameService } from 'src/app/gameservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-management-table',
  templateUrl: './management-table.component.html',
  styleUrls: ['./management-table.component.css'],
  
  providers: [MessageService,ConfirmationService]
})

//implements OnInit 
export class ManagementTableComponent implements OnInit {

    constructor(    
        private GameService: GameService, 
        private messageService: MessageService,
        private route:ActivatedRoute, 
        private confirmationService: ConfirmationService,
        private router:Router) {
         
    }
    
    gameDialog:boolean;

    oldName: String;

    games: any[];
    
    game: Game;
    
    selectedGames: Game[];
    
    submitted:boolean;

    isUpdate:boolean;
    
    
    //GameService: GameService;

    ngOnInit() {
        
        console.log("teste antes")
        this.getGames().then(data=> {
            console.log(JSON.stringify(data) + typeof(data)) 
            this.games = data.data;
        });

    }
    
    getGames(){
        
        return this.GameService.getGames().toPromise();
        
    }

    manageGame(game:Game){
        if(!this.isUpdate){
            this.messageService.add({severity:'warn', summary: 'The game was not yet created', detail: 'Game Non-existent'});
        }
        let routeUrl = '/manage/' + game.name;
        this.router.navigate([routeUrl]);
    }
    
    
    editGame(game: Game) {
        this.game = {...game};
        this.oldName = game.name;
        this.gameDialog = true;
        this.isUpdate = true;
    }
    
    openNew() {
        this.game = {name:""};
        this.submitted = false;
        this.isUpdate = false;
        this.gameDialog = true;
    }
    
    hideDialog() {
        this.gameDialog = false;
        this.submitted = false;
    }

    saveGame(game:Game) {

        if(this.isUpdate){
            this.submitted = true;
            let newName = this.game.name.trim()
            let currentName = this.oldName.toString();

            console.log(currentName + " <= Velho || Novo => "+ newName + " dentro de component.ts.saveGame()");
            
            if ( newName) {
                console.log(currentName +" <= Velho || Novo => "+ newName + " dentro do if do saveGame()");
                
                this.GameService.putGame(currentName,newName).toPromise().then(data => {
                    let result;
                    if(data.success){
                        result = 'success';
                    }else{
                        result = 'error';
                    }
                    this.messageService.add({severity: result, detail:data.message, summary:data.error});
                });
                this.hideDialog();
            }
        }else{
            console.log("Criando novo game => " + this.game.name);
            this.GameService.postGame(this.game.name).toPromise().then(data=> {
                let result;
                if(data.success){
                    result = 'success';
                }else{
                    result = 'error';
                }
                this.messageService.add({severity: result, detail:data.message, summary:data.error});

                if(data.success)
                    this.hideDialog();
            });
        }
    }
    
    deleteGame(game: Game) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + game.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                console.log("Cheguei dentro do accept " + game.name);
                this.GameService.deleteGame(game.name).subscribe();
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Game Deleted'});
            }
        });
    }
    

    /*        
            if (this.game.id) {
                this.games[this.(this.game.name)] = this.game;                
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
        */
    //console.log("antes do service")
    /*
                this.GameService.getGames().subscribe( (data) => {
                    console.log(data);
                    return data;
                });
                var teste = "teste 50" 
        console.log(teste);
        return  teste;

        */

        //console.log("depois do service")

/*

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
