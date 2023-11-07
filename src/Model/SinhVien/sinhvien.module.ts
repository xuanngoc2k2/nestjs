import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SinhVien } from "src/Entity/sinhvien.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([SinhVien])
    ]
})
export class SinhViensModel {

}