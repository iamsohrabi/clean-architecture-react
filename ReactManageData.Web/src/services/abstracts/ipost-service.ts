import { Post } from "domain/entities/post";

export interface IPostService {
    GetPostsAsync(currentPage:number, pageSize:number): Promise<Post[]>;
}