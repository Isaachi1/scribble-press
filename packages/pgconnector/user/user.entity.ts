import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserModel, UserGender } from "@scribble/common/models/user";

@Entity()
export class UserEntity implements UserModel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    birthday: Date;
    @Column({
        enum: ['M', 'F'],
        default: 'M'
    })
    gender: UserGender;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updateAt: Date;
}