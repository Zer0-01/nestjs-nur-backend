import { Injectable } from '@nestjs/common';
import { CreateDoaDto } from './dto/create-doa.dto';
import { UpdateDoaDto } from './dto/update-doa.dto';

@Injectable()
export class DoaService {
  create(createDoaDto: CreateDoaDto) {
    return 'This action adds a new doa';
  }

  findAll() {
    return `This action returns all doa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doa`;
  }

  update(id: number, updateDoaDto: UpdateDoaDto) {
    return `This action updates a #${id} doa`;
  }

  remove(id: number) {
    return `This action removes a #${id} doa`;
  }
}
