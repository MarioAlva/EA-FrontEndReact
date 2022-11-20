import { User } from "./User";

export interface Event {
    _id?: string;
    title: String;
    image: String;
    description: String;
    owner: User;
    date: Date;
    location: String;
    participants: User[];
    comments: Comment[];
    vote_average: Number;
    vote_count: Number;
}
export {};