import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cat } from './cat.model';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat-dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private catRepository: typeof Cat,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catRepository.create(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.findAll();
  }

  async findOne(id: number): Promise<Cat> {
    const cat = await this.catRepository.findByPk(id);
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<[number, Cat[]]> {
    return this.catRepository.update(updateCatDto, { where: { id }, returning: true });
  }

  async remove(id: number): Promise<number> {
    return this.catRepository.destroy({ where: { id } });
  }
}
