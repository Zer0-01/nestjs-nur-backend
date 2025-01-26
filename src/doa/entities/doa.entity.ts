import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    title: string

    @Column({ type: 'varchar', length: 1000 })
    content: string

    @Column({ type: 'varchar', length: 1000 })
    translation: string
}
