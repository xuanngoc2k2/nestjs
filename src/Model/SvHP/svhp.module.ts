import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SvHpEntity } from "src/Entity/sinhvienhocphan.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([SvHpEntity])
    ]
})
export class SVHPModel{

}