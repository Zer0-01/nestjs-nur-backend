import { PartialType } from '@nestjs/mapped-types';
import { CreateDoaDto } from './create-doa.dto';

export class UpdateDoaDto extends PartialType(CreateDoaDto) {}
