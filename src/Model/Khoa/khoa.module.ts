import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KhoaEntity } from "src/Entity/khoa.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([KhoaEntity])
    ]
})
export class KhoaModel{

}