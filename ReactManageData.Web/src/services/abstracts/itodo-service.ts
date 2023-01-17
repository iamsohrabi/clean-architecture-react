import { Todo } from "../../domain/entities/todo";

export interface IToDoService {
    GetToDos(currentPage: number, pageSize: number): Promise<Todo[]>;
}

