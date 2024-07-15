export class Transaction {
    id: number;
    date: Date;
    Comments: string = '';
    actions: string;
    constructor(id?: number, date?: Date, Comments?: string, actions?: string) {
        if (id !== undefined && date !== undefined && Comments !== undefined && actions !== undefined) {
            this.id = id;
            this.date = date;
            this.Comments = Comments;
            this.actions = actions;
        } else {
            this.id = 0;
            this.date = new Date();
            this.Comments = '';
            this.actions = '';
        }
    }
}
