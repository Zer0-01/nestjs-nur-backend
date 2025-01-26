import { isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateDoaDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    translation: string;
}
