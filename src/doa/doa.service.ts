import { Injectable } from '@nestjs/common';
import { CreateDoaDto } from './dto/create-doa.dto';
import { UpdateDoaDto } from './dto/update-doa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doa } from './entities/doa.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class DoaService {
  constructor(@InjectRepository(Doa) private readonly doaRepository: Repository<Doa>) { }

  createDoa(createDoaDto: CreateDoaDto): Promise<Doa> {
    const doa: Doa = new Doa();
    doa.title = createDoaDto.title;
    doa.content = createDoaDto.content;
    doa.translation = createDoaDto.translation;
    return this.doaRepository.save(doa);
  }

  async findAllDoa(): Promise<{ data: Doa[]; total: number }> {
    const [data, total] = await this.doaRepository.findAndCount();
    return { data, total };
  }

  findDoa(id: number): Promise<Doa | null> {
    return this.doaRepository.findOneBy({ id });
  }
  async updateDoa(id: number, updateDoaDto: UpdateDoaDto): Promise<Doa> {
    const existingDoa = await this.doaRepository.findOneBy({ id });
    if (!existingDoa) {
      throw new Error('Doa not found');
    }

    existingDoa.title = updateDoaDto.title ?? existingDoa.title;
    existingDoa.content = updateDoaDto.content ?? existingDoa.content;
    existingDoa.translation = updateDoaDto.translation ?? existingDoa.translation;

    return this.doaRepository.save(existingDoa);
  }

  async removeDoa(id: number): Promise<{ affected?: number }> {
    const result = await this.doaRepository.delete(id);
    return { affected: result.affected ?? undefined };
  }
}
