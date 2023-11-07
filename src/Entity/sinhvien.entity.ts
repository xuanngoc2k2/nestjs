import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm"

@Entity()
export class SinhVien {
    @PrimaryColumn()
    msv: number

    @Column()
    hoten: string

    @Column()
    ngaysinh: Date

    @Column()
    diachi: string

    @Column()
    sdt: string

    @Column()
    email: string

    // @OneToOne(() => UserEntity, (tk) => tk.id) // specify inverse side as a second parameter
    // @JoinColumn()
    // profile: UserEntity

    // @OneToMany(() => SvHpEntity, (svhp) => svhp.masv)
    // //@JoinColumn({ name: "masv" }) // Specify the foreign key column
    // hp: SvHpEntity[];
}