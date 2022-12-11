import { Episode } from "./Episode";
import { Comment } from "./Comment";

interface Serie {
    _id?: string;
    title: String;
    overview: String;
    poster_path: String;
    trailer_path: String;
    vote_average: {type: Number, min: 0, max: 10, default: 0};
    vote_count: {type: Number, min: 0, default: 0};
    number_of_seasons: Number;
    number_of_episodes: Number;
    genres: String[];
    status: String;
    networks: [];
    episodes: Episode[];
    comments: Comment[];
}
export default Serie;