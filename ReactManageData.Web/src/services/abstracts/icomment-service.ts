import { Comment } from "../../domain/entities/comment";


export interface ICommentService {
    GetCommentsAsync(currentPage: number, pageSize: number): Promise<Comment[]>;
    CreateComment(Comment: Comment): void;
}
