import { Book } from "./book.interface";

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    books: Book[]
}