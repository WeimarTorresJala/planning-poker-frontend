export interface IQuestion {
    _id?: string;
    sessionId: string;
    question: string;
    votes: [ string, number ][];
    vote: boolean;
    average: number;
}