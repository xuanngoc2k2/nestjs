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
        return `Timf all`
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateSv: SinhVienDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
