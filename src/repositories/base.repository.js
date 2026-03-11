import { session } from '../database/database.js';
import { eq } from 'drizzle-orm';

export class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async getById(id) {
        return await session.select().from(this.model).where(eq(this.model.id, id));
    }

    async getPaginated(page, limit) {
        return await session.select().from(this.model).limit(limit).offset((page - 1) * limit);
    }

    async create(data) {
        return await session.insert(this.model).values(data);
    }

    async update(id, data) {
        return await session.update(this.model).set(data).where(eq(this.model.id, id));
    }

    async delete(id) {
        return await session.delete(this.model).where(eq(this.model.id, id));
    }
}