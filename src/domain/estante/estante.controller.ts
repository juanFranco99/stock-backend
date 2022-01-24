import { Body, Controller, Param, Delete } from '@nestjs/common';
import { ParseIntPipe, Post, Put, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Estante } from './estante.entity';
import { EstanteService } from './estante.service';
import { EstanteDto } from './estante.dto';

@ApiTags('Estante')
@Controller('api/v1/estante')
export class EstanteController {
  constructor(private readonly estanteService: EstanteService<Estante>) {}

  @ApiOperation({ summary: 'Buscar todos los estantes' })
  @Get()
  async getMany() {
    const data = await this.estanteService.getAll();
    return data;
  }

  @ApiOperation({ summary: 'Buscar los estantes por id' })
  @Get(':id')
  async getByIdDeposito(@Param('id', ParseIntPipe) depositoId: number) {
    const data = await this.estanteService.getByIdDeposito(depositoId);
    return data;
  }

  @ApiOperation({ summary: 'Buscar estructura de estantes por id' })
  @Get('/api/v1/depositos/:id')
  async getById(@Param('id', ParseIntPipe) id: number) { 
    return await this.estanteService.getById(id);
  }

  @ApiOperation({ summary: 'Registrar estantes' })
  @Post()
  async createPost(@Body() dto: EstanteDto) {
    console.log(dto);
    return await this.estanteService.create(dto);
  }

  @ApiOperation({ summary: 'Modificar estantes' })
  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: Estante) {
    return await this.estanteService.edit(id, dto);
  }

  // @Delete(':id')
  // async deleteOne(@Param('id') id: number) {
  //   const data = await this.estanteService.delete(id);
  //   return data;
  // }
}
