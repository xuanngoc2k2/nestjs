import { Column, Double, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn } from "typeorm"
import { SinhVienEntity } from "./sinhvien.entity"
import { HocPhanEntity } from "./hocphan.entity"
import { UserEntity } from "./user.entity"

@Entity()
export class SvHpEntity {
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