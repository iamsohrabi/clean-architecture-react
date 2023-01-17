import { ICommentRepository } from "domain/abstracts/icomment-repository";
import { Comment } from "../../domain/entities/comment";
import { ICommentService } from "services/abstracts/icomment-service";


export class CommentService implements ICommentService {
  _commentRepo: ICommentRepository;

  constructor(commentRepo: ICommentRepository) {
    this._commentRepo = commentRepo;
  }

  CreateComment(comment: Comment): void {
      this._commentRepo.CreateCommentAsync(comment);    
  }

  GetCommentsAsync(currentPage: number, pageSize: number): Promise<Comment[]> {
    return this._commentRepo.GetCommentAsync(currentPage, pageSize);
  }

}