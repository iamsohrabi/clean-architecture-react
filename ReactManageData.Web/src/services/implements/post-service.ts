import { IPostRepository } from "domain/abstracts/ipost-repository";
import { Post } from "domain/entities/post";
import { IPostService } from "services/abstracts/ipost-service";

export class PostService implements IPostService {
    _postRepo: IPostRepository;
  
    constructor(postrepo: IPostRepository) {
      this._postRepo = postrepo;
    }

    async GetPostsAsync(currentPage:number, pageSize:number): Promise<Post[]> {
        return this._postRepo.GetPostsAsync(currentPage, pageSize);
    }   
}