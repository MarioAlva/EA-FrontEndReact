import { User } from "./User";

export interface Booking {
    _id?: string;
    name: String;
    owner: User;
}
export {};