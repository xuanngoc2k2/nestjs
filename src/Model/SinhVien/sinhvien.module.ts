import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SinhVienEntity } from "src/Entity/sinhvien.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([SinhVienEntity])
    ]
})
export class SinhViensModel{

}