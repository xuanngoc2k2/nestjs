import { Body, Controller, Get, Post } from "@nestjs/common";
import { SinhVienDto } from "src/dto/sinhvien.dto";
import { SinhVienService } from "./sinhvien.service";
import { SinhVien } from "src/Entity/sinhvien.entity";

@Controller('sinhviens')
export class SinhVienController {
    constructor(private readonly sinhvienService: SinhVienService) { }
    @Get()
    getAll(): string {
        return this.sinhvienService.findAll();
    }
    @Post()
    async createUser(@Body() sv: SinhVienDto): Promise<SinhVienDto> {
        return await this.sinhvienService.create(sv);
    }
}