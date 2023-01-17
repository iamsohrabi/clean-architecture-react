import { APIBaee } from "core/api-baee";
import { IToDoRepository } from "domain/abstracts/itodo-repository";
import { Todo } from "../domain/entities/todo";

class TodoViewModel {
    userId: number = 0;
    id: number = 0;
    title: string = "";
    completed: boolean = false;
}

export class ToDoRepository implements IToDoRepository {
    async GetToDosAsync(currentPage: number, pageSize: number): Promise<Todo[]> {
        const res = await fetch(APIBaee.GetUrl("todos", currentPage, pageSize));
        
        const jsonData = await res.json();

        return jsonData.map((todo: TodoViewModel) =>
            new Todo(todo.id, todo.userId, todo.title, todo.completed));
    }
}