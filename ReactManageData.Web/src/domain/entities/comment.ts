
export class Comment {
    postId: number = 0;
    id: number = 0;
    name: string = "";
    email: string = "";
    body: string = "";

    constructor(id: number, postId: number, name: string,
        email: string, body: string) {
        this.id = id;
        this.postId = postId;
        this.name = name;
        this.body = body;
        this.email = email;
    }
}
