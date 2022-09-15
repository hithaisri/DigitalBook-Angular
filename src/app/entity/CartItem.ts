import Book from 'src/app/entity/Book';

export default class CartItem {
    id: number;
    title: string;
    unitPrice: number;
    quantity: number;

    constructor(book: Book){
        this.id = book.id;
        this.title = book.title;
        this.unitPrice = book.price;
        this.quantity = 1;
    }
}