import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModule } from "../categoria/categoria.module";
import { Produto } from "./entities/produto.entities";
import { ProdutoService } from "./services/produto.services";
import { CategoriaService } from "../categoria/services/categoria.services";
import { ProdutoController } from "./controllers/produto.controllers";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})

export class ProdutoModule { }