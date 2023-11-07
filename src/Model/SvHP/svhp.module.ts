import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SvHp } from "src/Entity/sinhvienhocphan.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([SvHp])
    ]
})
export class SVHPModel {

}