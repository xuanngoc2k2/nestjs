import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { SinhVienEntity } from "./sinhvien.entity"

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id: number

    @Column()
    password: string

    @OneToOne(() => SinhVienEntity, (sv) => sv.msv) // specify inverse side as a second parameter
    user: SinhVienEntity
}