import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MercaderiaDto } from './mercaderia.dto';
import { Mercaderia } from './mercaderia.entity';

@Injectable()
export class MercaderiaService {
  constructor(
    @InjectRepository(Mercaderia)
    private readonly repository: Repository<Mercaderia>,
  ) {}

  // Obtiene todas las mercaderias
  async getAll(): Promise<Mercaderia[]> {
    return await this.repository.find();
  }

  // Obtiene una Mercaderia por su ID
  async getById(id: number): Promise<Mercaderia> {
    const mercaderia = await this.repository.findOne(id);
    if (!mercaderia)
      throw new NotFoundException(
        `No existe la mercaderia con el codigo ${id}`,
      );
    return mercaderia;
  }

  // Registra una mercaderia o dispara una excepcion 500 en caso de errores !
  async createOne(dto: MercaderiaDto): Promise<Mercaderia> {
    return await this.repository.save(dto).catch((err) => {
      throw new InternalServerErrorException({
        message: err.message,
        statusCode: 500,
        error: err.detail,
      });
    });
  }

  // Altera una mercaderia o dispara una excepcion 500 en caso de errores !
  async editOne(id: number, dto: MercaderiaDto): Promise<Mercaderia> {
    const mercaderia = await this.repository.findOne(id);
    if (!mercaderia)
      throw new NotFoundException(
        `No existe la mercaderia con el codigo ${id}`,
      );
    const updatedmercaderia = Object.assign(mercaderia, dto);
    return await this.repository.save(updatedmercaderia).catch((err) => {
      throw new InternalServerErrorException({
        message: err.message,
        statusCode: 500,
        error: err.detail,
      });
    });
  }
}
