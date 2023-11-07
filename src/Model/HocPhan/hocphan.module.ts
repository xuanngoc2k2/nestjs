import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HocPhanEntity } from "src/Entity/hocphan.entity";
import { KhoaEntity } from "src/Entity/khoa.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([HocPhanEntity])
    ]
})
export class HocPhanModel{

}