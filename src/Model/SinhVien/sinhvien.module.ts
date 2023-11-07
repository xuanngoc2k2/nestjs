import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SinhVien } from "src/Entity/sinhvien.entity";
import { SinhVienController } from "./sinhvien.controller";
import { SinhVienService } from "./sinhvien.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([SinhVien])
    ],
    controllers: [SinhVienController],
    providers: [SinhVienService]
})
export class SinhViensModel {

}