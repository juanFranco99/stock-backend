import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { Status } from "src/enums/status.enum";


export class DepositoDto{
    @IsString()
    @ApiProperty({
        nullable: false,
        required: true,
        maxLength: 50
    })
    nombre: string;
    
    @IsEnum(Status)
    @ApiProperty({enum: Status})
    status: Status;

}