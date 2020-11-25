import { Game } from 'src/app/game';

import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SchemaService } from 'src/app/schemaservice';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-game',
  templateUrl: './manage-game.component.html',
  styleUrls: ['./manage-game.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class ManageGameComponent  implements OnInit {
    submitted: boolean;
    dataDialog: boolean;
    
    constructor( private schemaService: SchemaService, private messageService: MessageService, private confirmationService: ConfirmationService,private route: ActivatedRoute ) { }

    game: any;

    data: any;

    dataList: any;

    characterDataList:any[];
    characterDataProperty:any[];
    characterDataValues:any[];

    attackDataList:any[];
    attackDataProperty:any[];
    attackDataValues:any[];


    ngOnInit(): void {

        this.game = this.route.snapshot.paramMap.get('game');
        console.log( this.game  + " get Game OnInit ") ;
        let temp = this.getSchema(this.game).then(data=>{
            console.log(data);
            this.data = data;

            console.log(data)
            this.dataList = data.data[0];
            
            this.characterDataList = this.dataList.datalist.characterDataList;
            
            this.attackDataList = this.dataList.datalist.attackDataList;
        
        /*
        this.characterDataProperty = Object.getOwnPropertyNames(this.characterDataList);
        this.characterDataValues = Object.values(this.characterDataList);
        this.attackDataProperty = Object.getOwnPropertyNames(this.attackDataList);
        this.attackDataValues = Object.values(this.attackDataList);
        console.log(this.attackDataList + typeof(this.attackDataList));
        console.log(this.characterDataList) + typeof(this.characterDataList);
        console.log("------------------------");
        console.log(this.attackDataProperty + typeof(this.attackDataProperty));
        console.log(this.characterDataProperty) + typeof(this.characterDataProperty);
        console.log("------------------------");
        console.log(this.attackDataValues + typeof(this.attackDataValues));
        console.log(this.characterDataValues) + typeof(this.characterDataValues);
        */      
    });
  }

    getSchema(game){
        return this.schemaService.getSchema(game).toPromise();
    }

    hideDialog() {
        this.dataDialog = false;
    }

    showDialog(){
        this.dataDialog = true;
    }

}


/*
    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => !this.selectedProducts.includes(val));
                this.selectedProducts = null;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }
    
    saveProduct() {
        this.submitted = true;

        if (this.product.name.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
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
}

*/