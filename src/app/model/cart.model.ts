import { medicine } from './medicine.model';

export class cartModule {
    
        constructor(med:medicine){
            this.medItem=med;
        }
       // OrderId : number;
        quantity: number =1;
        medItem: medicine;
        get price():number{
            return this.medItem.price*this.quantity;
          }
    
    
    }
