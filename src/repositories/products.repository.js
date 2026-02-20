import { BaseRepository } from './base.repository.js';
import { products } from '../schemas/products.js';

class ProductsRepository extends BaseRepository {
    constructor() {
        super(products);
    }
}

export const productsRepository = new ProductsRepository();