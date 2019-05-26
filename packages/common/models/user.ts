export type UserGender = 'M' | 'F';

export interface UserModel {
    id: number;
    username: string;
    email: string;
    password: string;
    birthday: Date;
    gender: UserGender;
    createdAt: Date;
    updateAt: Date;
};