export class Transaction {
    id: number;
    date: Date;
    comments: string;
    actions: string;
    constructor(id?: number, date?: Date, comments?: string, actions?: string) {
        if (id !== undefined && date !== undefined && comments !== undefined && actions !== undefined) {
            this.id = id;
            this.date = date;
            this.comments = comments;
            this.actions = actions;
        } else {
            this.id = 0;
            this.date = new Date();
            this.comments = '';
            this.actions = '';
        }
    }
}
