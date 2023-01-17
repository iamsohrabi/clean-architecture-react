import { Todo } from '../../domain/entities/todo';

export interface IToDoRepository {
    GetToDosAsync(currentPage: number, pageSize: number): Promise<Todo[]>;
}

