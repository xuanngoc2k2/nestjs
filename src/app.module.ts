import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModel } from './Model/user/user.module';
import { UserEntity } from './Entity/user.entity';
import { SinhVienEntity } from './Entity/sinhvien.entity';
import { SinhViensModel } from './Model/SinhVien/sinhvien.module';
import { KhoaEntity } from './Entity/khoa.entity';
import { KhoaModel } from './Model/Khoa/khoa.module';
import { NganhEntity } from './Entity/nganh.entity';
import { NganhModel } from './Model/Nganh/nganh.module';
import { HocPhanEntity } from './Entity/hocphan.entity';
import { SVHPModel } from './Model/SvHP/svhp.module';
import { SvHpEntity } from './Entity/sinhvienhocphan.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'qldiemsv',
      entities: [
        UserEntity,
        SinhVienEntity,
        KhoaEntity,
        NganhEntity,
        HocPhanEntity,
        SvHpEntity
      ],
      synchronize: true,
    }),
    UsersModel,
    SinhViensModel,
    KhoaModel,
    NganhModel,
    HocPhanEntity,
    SVHPModel
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
