import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoaService } from './doa.service';
import { CreateDoaDto } from './dto/create-doa.dto';
import { UpdateDoaDto } from './dto/update-doa.dto';

@Controller('doa')
export class DoaController {
  constructor(private readonly doaService: DoaService) {}

  @Post()
  create(@Body() createDoaDto: CreateDoaDto) {
    return this.doaService.create(createDoaDto);
  }

  @Get()
  findAll() {
    return this.doaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoaDto: UpdateDoaDto) {
    return this.doaService.update(+id, updateDoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doaService.remove(+id);
  }
}
