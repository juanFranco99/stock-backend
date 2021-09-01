import { Body, Controller, Param, Delete } from '@nestjs/common';
import { ParseIntPipe, Post, Put, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Estante } from './estante.entity';
import { EstanteService } from './estante.service';

@ApiTags('Estante')
@Controller('api/v1/estante')
export class EstanteController {
  constructor(private readonly estanteService: EstanteService<Estante>) {}

  @Get()
  async getMany() {
    const data = await this.estanteService.getAll();
    return data;
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.estanteService.getById(id);
    return data;
  }

  @Post()
  async createPost(@Body() dto: Estante) {
    console.log(dto);
    const data = await this.estanteService.create(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: Estante) {
    const data = await this.estanteService.edit(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.estanteService.delete(id);
    return data;
  }
}
