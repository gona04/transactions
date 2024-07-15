export class Transaction {
    _id: string = ''; // Add an initializer to the _id property
    id: number;
    date: Date;
    Comments: string = '';
    actions: string;
    status: string;
    constructor(id?: number, date?: Date, Comments?: string, actions?: string, status?: string) {
        if (id !== undefined && date !== undefined && Comments !== undefined && actions !== undefined && status !== undefined) {
            this.id = id;
            this.date = date;
            this.Comments = Comments;
            this.actions = actions;
            this.status = status;
        } else {
            this.id = 0;
            this.date = new Date();
            this.Comments = '';
            this.actions = '';
            this.status = '';
        }
    }
}
