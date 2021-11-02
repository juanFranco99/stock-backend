import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put , UseGuards} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Repository } from "typeorm";


@Controller()
export class GenericController<E,DTO> {
    
    constructor(readonly service:any) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return  data ;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number) {
      const data = await this.service.getById(id);
      return  data ;
    }
  
    @Post()
    async createPost(@Body() dto: DTO) {
      const data = await this.service.create(dto);
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: DTO) {
      const data = await this.service.editOne(id, dto);
      return data;
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }

  }