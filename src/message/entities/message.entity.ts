import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('message')
export class Message {
    @PrimaryGeneratedColumn() id: number;

    @Column() nick: string;
    @Column() message: string;
}
