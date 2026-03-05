import { BaseRepository } from './base.repository.js';
import { products } from '../schemas/products.js';

class ProductsRepository extends BaseRepository {
    constructor() {
        super(products);
    }

    async getByUserId(userId) {
        return await session.select().from(products).where(eq(products.userId, userId));
    }
}

export const productsRepository = new ProductsRepository();