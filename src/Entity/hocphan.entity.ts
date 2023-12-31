import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class HocPhan {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tenhp: string

    @Column()
    kihieu: string

    @Column()
    thoigianhoc: Date

    @Column()
    diadiemhoc: string

    @Column()
    stc: number

    @Column()
    sl: number

    @Column()
    hocki: string

    // @ManyToOne(() => NganhEntity, (nganh) => nganh.id)
    // nganh: NganhEntity

    // @ManyToOne(() => SvHpEntity, (svhp) => svhp.mahp)
    // //@JoinColumn({ name: "mahp" }) // Specify the foreign key column
    // svhp: SvHpEntity;

}