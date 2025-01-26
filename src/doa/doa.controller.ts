import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DoaService } from './doa.service';
import { CreateDoaDto } from './dto/create-doa.dto';
import { UpdateDoaDto } from './dto/update-doa.dto';

@Controller('doa')
@UsePipes(new ValidationPipe())
export class DoaController {
  constructor(private readonly doaService: DoaService) { }

  @Post()
  create(@Body() createDoaDto: CreateDoaDto) {
    return this.doaService.createDoa(createDoaDto);
  }

  @Get()
  findAll() {
    return this.doaService.findAllDoa();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doaService.findDoa(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoaDto: UpdateDoaDto) {
    return this.doaService.updateDoa(+id, updateDoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doaService.removeDoa(+id);
  }
}
