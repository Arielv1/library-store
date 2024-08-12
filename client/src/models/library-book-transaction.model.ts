import { Book } from "./book.interface";
import { LibraryUser } from "./library-user.model";
import { Library } from "./library.model";
import { OrderType } from "./types/types";

export interface LibrarayBookTransaction {
    id: number;
    book: Book;
    library: Library;
    orderDate: Date;
    user: LibraryUser;
    orderType: OrderType;
    quantity: number; 
}
