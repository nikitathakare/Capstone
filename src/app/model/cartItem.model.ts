import { cartModule } from './cart.model';
export class cartItem{

    items:cartModule[]=[];

    get TotalPrice():number{
        let total =0;
        this.items.forEach(item => {
            total+=item.price;
            
        });
        return total;
    }
}