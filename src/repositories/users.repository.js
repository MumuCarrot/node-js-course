import { BaseRepository } from './base.repository.js';
import { users } from '../schemas/users.js';

class UserRepository extends BaseRepository {
    constructor() {
        super(users);
    }
}

export const userRepository = new UserRepository();