import { User } from "./User";
import { Comment } from "./Comment";

export interface Event {
    _id?: string;
    title?: String;
    image?: string;
    description?: String;
    owner?: User;
    date?: Date;
    location?: String;
	lat?: number;
	lng?: number;
    participants?: User[];
    comments: Comment[];
    vote_average?: Number;
    vote_count?: Number;
}
export {};