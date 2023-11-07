import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KhoaEntity } from "src/Entity/khoa.entity";
import { NganhEntity } from "src/Entity/nganh.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([NganhEntity])
    ]
})
export class NganhModel{

}