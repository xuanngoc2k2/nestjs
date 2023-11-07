import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";

@Controller('users')
export class UserController {

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return {
            username: user.username,
            password: user.password
        }
    }
}
