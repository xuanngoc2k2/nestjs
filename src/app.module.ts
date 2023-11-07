import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModel } from './Model/user/user.module';
import { SinhViensModel } from './Model/SinhVien/sinhvien.module';
import { KhoaModel } from './Model/Khoa/khoa.module';
import { NganhModel } from './Model/Nganh/nganh.module';
import { SVHPModel } from './Model/SvHP/svhp.module';
import { User } from './Entity/user.entity';
import { SinhVien } from './Entity/sinhvien.entity';
import { Khoa } from './Entity/khoa.entity';
import { Nganh } from './Entity/nganh.entity';
import { HocPhan } from './Entity/hocphan.entity';
import { SvHp } from './Entity/sinhvienhocphan.entity';
import { HocPhanModel } from './Model/HocPhan/hocphan.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'qldiemsv',
      entities:
        [
          // [__dirname + '/**/*/*.entity{.ts,.js}'],
          User,
          SinhVien,
          Khoa,
          Nganh,
          HocPhan,
          SvHp
        ],
      synchronize: true,
    }),
    UsersModel,
    SinhViensModel,
    KhoaModel,
    NganhModel,
    SVHPModel,
    HocPhanModel
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
