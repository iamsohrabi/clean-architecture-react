export class Post {
    userId: number = 0;
    id: number = 0;
    title: string = "";
    body: string = "";
    
    constructor(id: number, userId: number, title: string, body: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}