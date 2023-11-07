import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HocPhan } from "src/Entity/hocphan.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([HocPhan])
    ]
})
export class HocPhanModel {

}