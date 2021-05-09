export interface UserIdl {
    id: { toNumber(): number };
    firstName: string;
    lastName: string;
    desc: string;
};