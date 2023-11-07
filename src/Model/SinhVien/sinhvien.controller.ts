import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SinhVienDto } from "src/dto/sinhvien.dto";
import { SinhVienService } from "./sinhvien.service";
import { SinhVien } from "src/Entity/sinhvien.entity";

@Controller('sinhviens')
export class SinhVienController {
    constructor(private readonly sinhvienService: SinhVienService) { }
    @Get()
    async getAll(): Promise<SinhVien[]> {
        return await this.sinhvienService.findAll();
    }

    @Get(':id')
    async getSvbyId(@Param('id') id: number): Promise<SinhVien> {
        return await this.sinhvienService.findOne(id)
    }
    @Post()
    async createUser(@Body() sv: SinhVienDto): Promise<SinhVienDto> {
        return await this.sinhvienService.create(sv);
    }

    @Put(':id')
    async updateUser(@Body() sv: SinhVienDto, @Param('id') id: number): Promise<string> {
        return await this.sinhvienService.update(id, sv);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<string> {
        return await this.sinhvienService.remove(id);
    }
}