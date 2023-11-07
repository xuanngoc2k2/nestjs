import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Khoa {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tenkhoa: string

    @Column()
    kihieu: string

    @Column()
    mota: string

    // @OneToMany(() => NganhEntity, (nganh) => nganh.id)
    // nganhs: NganhEntity[]
}