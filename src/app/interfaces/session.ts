export interface ISession {
    _id?: string;
    name: string;
    typeId: number;
    questionsId: [
        string
    ];
    ownerId: string;
}