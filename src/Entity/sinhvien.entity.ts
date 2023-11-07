import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm"
import { UserEntity } from "./user.entity"
import { SvHpEntity } from "./sinhvienhocphan.entity"

@Entity()
export class SinhVienEntity {
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

    @OneToOne(() => UserEntity, (tk) => tk.id) // specify inverse side as a second parameter
    @JoinColumn()
    profile: UserEntity

    @ManyToOne(() => SvHpEntity, (svhp) => svhp.masv)
    //@JoinColumn({ name: "masv" }) // Specify the foreign key column
    masv: SvHpEntity;

}