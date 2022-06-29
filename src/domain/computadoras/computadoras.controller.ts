import { Body, Controller, Delete, NotFoundException } from '@nestjs/common';
import { Param, ParseIntPipe, Post, Put, Get } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiNotFoundResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { ApiBadRequestResponse, ApiParam } from '@nestjs/swagger';
import { Status } from 'src/enums/status.enum';
import { Computadora } from './computadoras.entity';
import { ComputadoraService } from './computadoras.service';

@ApiTags('Computadora')
@Controller('api/v1/computadora')
export class ComputadoraController {
  constructor(private readonly service: ComputadoraService<Computadora>) {}

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
    return data;
  }

  @Get('activo')
  @ApiNotFoundResponse({
    status: 404,
    description: 'Sin registros para mostrar.',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna los registros activos.',
  })
  async getActivo() {
    try {
      const data = await this.service.getActivos();
      if (data.length === 0)
        throw new NotFoundException('Sin registros para mostrar.');
      return data;
    } catch (error) {}
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
    return data;
  }

  @Get('activo/:id')
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
  async getActivoById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getActivoById(id);
    if (!data) throw new NotFoundException('Registro inexistente.');
    return data;
  }

  @Post()
  @ApiBody({ type: Computadora, required: true })
  @ApiCreatedResponse({
    status: 201,
    description: 'Retorna el registro insertado.',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Argumentos inválidos.',
  })
  // Insertar registro
  async create(@Body() dto: Computadora) {
    try {
      const data = await this.service.create(dto);
      return { ok: true, message: 'Registro insertado', data };
    } catch (error) {
      console.error(error);
      return { ok: false, message: 'Error al insertar' };
    }
  }

  @Put(':id')
  @ApiBody({ type: Computadora, required: true })
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiNotFoundResponse({ status: 404, description: 'Registro inexistente' })
  @ApiBadRequestResponse({ status: 400, description: 'Argumentos inválidos' })
  @ApiOkResponse({
    status: 200,
    description: 'Retorna el registro actualizado',
  })
  // Actualizar registro
  async edit(@Param('id', ParseIntPipe) id: number, @Body() dto: Computadora) {
    try {
      let data: any = await this.service.edit(id, dto);
      return {
        ok: true,
        message: 'Registro actualizado',
        data,
      };
    } catch (error) {
      console.error(error);
      return { ok: false, message: 'Error al actualizar' };
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true, type: Number })
  @ApiOkResponse({ status: 200, description: 'Retorna el registro eliminado.' })
  @ApiNotFoundResponse({ status: 404, description: 'Registro inexistente.' })
  @ApiBadRequestResponse({ status: 400, description: 'Argumento inválido.' })
  // Eliminar registro
  async delete(@Param('id') id: number) {
    try {
      const data: any = await this.service.getById(id);

      await this.service.edit(id, { ...data, status: Status.INACTIVO });
      return { ok: true, data, message: 'Registro eliminado' };
    } catch (error) {
      console.error(error);
      return { ok: false, message: error.message };
    }
  }
}
