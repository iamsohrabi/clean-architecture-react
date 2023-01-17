import { APIBaee } from "core/api-baee";
import { ICommentRepository } from "domain/abstracts/icomment-repository";
import { Comment } from '../domain/entities/comment';

interface CommentViewModel{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export class CommentRepository implements ICommentRepository {

    async DeleteCommentAsync(id: number): Promise<number> {
        var res = await fetch(process.env.JSON_PLACE_HOLDER + "posts/" + id, { method: "DELETE" }); 
        const jsonDate = await res.json();
        return jsonDate;
    }
    
    async CreateCommentAsync(comment: Comment) {
        await fetch("url fo create comment", {
            method: "POST",
            body: JSON.stringify(comment),
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        });
    }

    async GetCommentAsync(currentPage: number, pageSize: number): Promise<Comment[]> {
        const res = await fetch(APIBaee.GetUrl("comments", currentPage, pageSize));
        const jsonDate = await res.json();
        return jsonDate.map((comment: CommentViewModel) =>
                new Comment(comment.id, comment.postId, comment.name, comment.email, comment.body));
    }

}