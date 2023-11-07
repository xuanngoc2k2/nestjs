import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SinhVien } from 'src/Entity/sinhvien.entity';
import { SinhVienDto } from 'src/dto/sinhvien.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SinhVienService {
    constructor(
        @InjectRepository(SinhVien)
        private readonly userRepo: Repository<SinhVien>,
    ) { }

    create(user: SinhVienDto): Promise<SinhVienDto> {
        return this.userRepo.save(user);
    }

    findAll() {
        console.log(this.userRepo.find())
        return this.userRepo.find();
    }

    findOne(id: number) {
        return this.userRepo.findOne({
            where: {
                msv: id
            }
        });
    }

    async update(id: number, updateSv: SinhVienDto): Promise<string> {
        if (await this.userRepo.update(id, updateSv)) {
            return `UpdateOk`;
        }
        else {
            return `Khoong update dc`;
        }
    }

    async remove(id: number): Promise<string> {
        if (await this.userRepo.delete(id)) {
            return `Delete Ok`;
        }
        else {
            return `Khoong delete dc`;
        }
    }
}
