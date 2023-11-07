import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";

@Controller('sinhviens')
export class SinhVienController {

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return {
            username: user.username,
            password: user.password
        }
    }
}