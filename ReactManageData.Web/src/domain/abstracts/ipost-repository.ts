import { Post } from "domain/entities/post";

export interface IPostRepository {
    GetPostsAsync(currentPage:number, pageSize:number): Promise<Post[]>;
}

