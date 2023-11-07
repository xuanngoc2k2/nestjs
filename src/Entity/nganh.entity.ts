import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class Nganh {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tennganh: string

    @Column()
    kihieu: string

    @Column()
    mota: string

    // @ManyToOne(() => KhoaEntity, (khoa) => khoa.nganhs)
    // khoa: KhoaEntity

    // @OneToMany(() => HocPhanEntity, (hp) => hp.nganh)
    // hps: HocPhanEntity[]
}
