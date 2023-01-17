import { APIBaee } from "core/api-baee";
import { IPostRepository } from "domain/abstracts/ipost-repository";
import { Post } from "../domain/entities/post";

interface PostViewModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class PostRepository implements IPostRepository {
    async GetPostsAsync(currentPage: number, pageSize: number): Promise<Post[]> {        
        const res = await fetch(APIBaee.GetUrl("posts", currentPage, pageSize));        
        const jsonData = await res.json();
        return jsonData.map((item: PostViewModel) =>
            new Post(item.id, item.userId, item.title, item.body));
    }
}