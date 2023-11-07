import { Column, Double, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn } from "typeorm"

@Entity()
export class SvHp {
    @PrimaryColumn()
    masv: number

    @PrimaryColumn()
    mahp: number

    @PrimaryColumn()
    lanhoc: number

    @Column('double')
    diemqt: number

    @Column('double')
    diemthi: number

    @Column('double')
    diemkt: number

    // @OneToMany(() => HocPhanEntity, (hp) => hp.nganh)
    // hps: HocPhanEntity[]

    // @OneToMany(() => UserEntity, (sv) => sv.id)
    // user: UserEntity[]
}