import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    id: number

    @Column()
    password: string

    // @OneToOne(() => SinhVienEntity, (sv) => sv.msv) // specify inverse side as a second parameter
    // user: SinhVienEntity
}