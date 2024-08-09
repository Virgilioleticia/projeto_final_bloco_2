import { Module } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controllers';
import { CategoriaService } from './services/categoria.services';

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})
export class CategoriaModule {};