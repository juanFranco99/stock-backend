import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MercaderiaDto } from './mercaderia.dto';
import { MercaderiaService } from './mercaderia.service';

@ApiTags('Mercaderia')
@Controller('mercaderia')
export class MercaderiaController {
  constructor(private readonly service: MercaderiaService) {}

  @ApiOperation({ summary: 'Buscar todas las mercaderias' })
  @Get()
  async getMany() {
    return await this.service.getAll();
  }

  @ApiOperation({ summary: 'Buscar mercaderia por codigo' })
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.service.getById(id);
  }

  @ApiOperation({ summary: 'Registrar una mercaderia' })
  @Post()
  async createPost(@Body() dto: MercaderiaDto) {
    return await this.service.createOne(dto);
  }

  @ApiOperation({ summary: 'Alterar una mercaderia' })
  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: MercaderiaDto) {
    return await this.service.editOne(id, dto);
  }
}
