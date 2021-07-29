import { BadRequestException } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { DepositoDto } from './deposito.dto';
import { RegistroDepositoService } from './deposito.service';

@ApiTags('Registro Deposito')
@Controller('api/v1/deposito')
export class RegistroDepositoController {
  constructor(private readonly service: RegistroDepositoService) {}

  @Get()
  @ApiNotFoundResponse({
    status: 404,
    description: 'Sin registros para mostrar.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna los registros existentes.',
  })
  // Obtener todos los registros
  async getAll() {
    const data = await this.service.getAll();
    if (data.length === 0)
      throw new NotFoundException('Sin registros para mostrar.');
    return { data, length: data.length };
  }

  @Get(':id')
  @ApiNotFoundResponse({
    status: 404,
    description: 'Registro inexistente.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna el registro solicitado.',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Argumento inválido.' })
  @ApiParam({ name: 'id', required: true, type: Number })
  // Obtener unico registro por ID
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    if (!data) throw new NotFoundException('Registro inexistente.');
    return { data };
  }

  @Post()
  @ApiBody({ type: DepositoDto, required: true })
  @ApiCreatedResponse({
    status: 201,
    description: 'Retorna el registro insertado.',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Argumentos inválidos.',
  })
  // Insertar registro
  async createOne(@Body() dto: DepositoDto) {
    const data = await this.service.createOne(dto);
    return { data };
  }

  @Put(':id')
  @ApiBody({ type: DepositoDto, required: true })
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiNotFoundResponse({ status: 404, description: 'Registro inexistente' })
  @ApiBadRequestResponse({ status: 400, description: 'Argumentos inválidos' })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna el registro actualizado',
  })
  // Actualizar registro
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DepositoDto,
  ) {
    let response: any = await this.service.editOne(id, dto);
    if (response?.data)
      response = {
        data: response.data,
        message: 'Registro actualizado',
      };
    return await this.service.editOne(id, dto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiOkResponse({ status: 200, description: 'Retorna el registro eliminado.' })
  @ApiNotFoundResponse({ status: 404, description: 'Registro inexistente.' })
  @ApiBadRequestResponse({ status: 400, description: 'Argumento inválido.' })
  // Eliminar registro
  async deleteOne(@Param('id') id: number) {
    let response: any = await this.service.deleteOne(id);
    if (response?.id)
      response = { data: response, message: 'Registro eliminado' };
    return response;
  }
}
