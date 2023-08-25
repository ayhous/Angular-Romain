class Invoice {

    public  price : number;
    private declare tva : string;
    protected declare deadline : Date;

    static getDetails(){
        console.log('un super text dans le static');
        
    }

}

class UnpaideInvoices extends Invoice{
    constructor(){
        super();
        console.log(this.price);
        console.log(this.deadline);
            //la sous class n a pas accés a la variable tva
        
    }
}


Invoice.getDetails();

const invoice = new Invoice();
console.log(invoice.price);
//la proprieté tva est privée accessible que a l interieur de la class.
//console.log(invoice.tva);
//accessible que dans la classe ou ses sous class
//console.log(invoice.deadline);
