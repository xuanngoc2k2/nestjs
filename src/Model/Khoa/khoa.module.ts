import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Khoa } from "src/Entity/khoa.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Khoa])
    ]
})
export class KhoaModel {

}