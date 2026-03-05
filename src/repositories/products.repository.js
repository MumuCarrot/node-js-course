import { BaseRepository } from './base.repository.js';
import { products } from '../schemas/products.js';
import { session } from '../database/database.js';
import { eq } from 'drizzle-orm';

class ProductsRepository extends BaseRepository {
    constructor() {
        super(products);
    }

    async getByUserId(userId) {
        return await session.select().from(products).where(eq(products.userId, userId));
    }
}

export const productsRepository = new ProductsRepository();