import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EstanteDto } from './estante.dto';
import { Estante } from './estante.entity';
import { EstanteService } from './estante.service';

@ApiTags('Estante')
@Controller('estante')
export class EstanteController {

    constructor(private readonly service: EstanteService<Estante>){}

      @Get()
      async getMany() {
        const data = await this.service.getAll();
        return data;
      }

      @Get('/deposito/:depositoId')
      async getByIdTask(@Param('depositoId', ParseIntPipe) depositoId: number){
        const data = await this.service.getByIdDeposito(depositoId);
        return data;
      }
    
      @Get(':id')
      async getById(@Param('id', ParseIntPipe) id: number) {
        const data = await this.service.getById(id);
        return data;
      }
    
      @Post()
      async createPost(@Body() dto: EstanteDto) {
        console.log(dto)
        const data = await this.service.create(dto);
        return data;
      }
    
      @Put(':id')
      async editOne(@Param('id') id: number, @Body() dto: Estante) {
        const data = await this.service.edit(id, dto);
        return data;
      }
    
      @Delete(':id')
      async deleteOne(@Param('id') id: number) {
        const data = await this.service.delete(id);
        return data;
      }

}
