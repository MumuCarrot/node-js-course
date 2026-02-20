import express from 'express';
import { userRepository } from '../repositories/users.repository.js';

const router = express.Router();

router.get('/users', (request, response) => {
   return response.redirect('/users/1/10');
});

router.get('/users/:page/:limit', async (request, response) => {
   let { page, limit } = request.params;

   if (isNaN(page) || page < 1) {
      page = 1;
   }

   if (isNaN(limit) || limit < 1) {
      limit = 10;
   }

   const users = await userRepository.getPaginated(parseInt(page), parseInt(limit));
   return response.json({ route: '/users', users });
});

router.get('/user/:id', async (request, response) => {
   const { id } = request.params;
   const user = await userRepository.getById(parseInt(id));
   return response.json({ route: '/users', user });
});

router.post('/user', async (request, response) => {
   const { name, email } = request.body;
   const user = await userRepository.create({ name, email });
   return response.json({ route: '/users', user });
});

router.patch('/user/:id', async (request, response) => {
   const { id } = request.params;
   const { name, email } = request.body;
   const user = await userRepository.update(parseInt(id), { name, email });
   return response.json({ route: '/users', user });
});

router.delete('/user/:id', async (request, response) => {
   const { id } = request.params;
   const user = await userRepository.delete(parseInt(id));
   return response.json({ route: '/users', user });
});

export default router;