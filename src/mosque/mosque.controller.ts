import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MosqueService } from './mosque.service';
import { CreateMosqueDto } from './dto/create-mosque.dto';
import { UpdateMosqueDto } from './dto/update-mosque.dto';

@Controller('mosque')
export class MosqueController {
  constructor(private readonly mosqueService: MosqueService) {}

  @Post()
  create(@Body() createMosqueDto: CreateMosqueDto) {
    return this.mosqueService.create(createMosqueDto);
  }

  @Get()
  findAll() {
    return this.mosqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mosqueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMosqueDto: UpdateMosqueDto) {
    return this.mosqueService.update(+id, updateMosqueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mosqueService.remove(+id);
  }
}
