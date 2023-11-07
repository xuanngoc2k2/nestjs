import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Nganh } from "src/Entity/nganh.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Nganh])
    ]
})
export class NganhModel {

}