import { IToDoRepository } from "domain/abstracts/itodo-repository";
import { Todo } from "../../domain/entities/todo";
import { IToDoService } from "services/abstracts/itodo-service";


export class ToDoService implements IToDoService {
  _todoRepo: IToDoRepository;

  constructor(todoRepo: IToDoRepository) {
    this._todoRepo = todoRepo;
  }

  GetToDos(currentPage: number, pageSize: number): Promise<Todo[]> {
    return this._todoRepo.GetToDosAsync(currentPage, pageSize);
  }
}
