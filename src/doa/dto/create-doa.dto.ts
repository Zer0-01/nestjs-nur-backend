import { isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateDoaDto {
    @IsString()
    @IsNotEmpty()
    title: String;

    @IsNotEmpty()
    @IsString()
    content: String;

    @IsNotEmpty()
    @IsString()
    translation: String;
}
