
import { Comment } from "../../domain/entities/comment";

export interface ICommentRepository {
    GetCommentAsync(currentPage: number, pageSize: number): Promise<Comment[]>;
    CreateCommentAsync(comment: Comment):void;
    DeleteCommentAsync(id: number):Promise<number>;
}