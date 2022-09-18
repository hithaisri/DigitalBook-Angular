import Book from 'src/app/entity/Book';

export default class CartItem {
    id:number;
    userId:number;
    unitPrice: number;
    bookName:string
    bookId:number;
    quantity: number;

    constructor(book: Book){
        this.bookId = book.id;
        this.unitPrice = book.price;
        this.quantity = 1;
        this.bookName=book.title;
        this.userId=parseInt(sessionStorage.getItem('userId'));
    }
}