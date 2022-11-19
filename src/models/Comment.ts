import { User } from "./User";

export interface Comment {
    _id?: string;
    content: String;
    owner: User;
    likes: Number;
}
export {};