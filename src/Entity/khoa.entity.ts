import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { NganhEntity } from "./nganh.entity"

@Entity()
export class KhoaEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tenkhoa: string

    @Column()
    kihieu: string

    @Column()
    mota: string

    @OneToMany(() => NganhEntity, (nganh) => nganh.id)
    nganhs: NganhEntity[]
}