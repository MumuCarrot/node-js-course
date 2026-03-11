import express from 'express';
import { productsRepository } from '../repositories/products.repository.js';

const router = express.Router();

router.get('/products/:page/:limit', async (request, response) => {
   let { page, limit } = request.params;

   if (isNaN(page) || page < 1) {
      page = 1;
   }

   if (isNaN(limit) || limit < 1) {
      limit = 10;
   }

   const products = await productsRepository.getPaginated(parseInt(page), parseInt(limit));
   return response.json({ route: '/products', products });
});

router.get('/product/:id', async (request, response) => {
   const { id } = request.params;
   const product = await productsRepository.getById(parseInt(id));
   return response.json({ route: '/products', product });
});

router.post('/product', async (request, response) => {
   const { name, brand } = request.body;
   const product = await productsRepository.create({ name, brand });
   return response.json({ route: '/products', product });
});

router.patch('/product/:id', async (request, response) => {
   const { id } = request.params;
   const { name, brand } = request.body;
   const product = await productsRepository.update(parseInt(id), { name, brand });
   return response.json({ route: '/products', product });
});

router.delete('/product/:id', async (request, response) => {
   const { id } = request.params;
   const product = await productsRepository.delete(parseInt(id));
   return response.json({ route: '/products', product });
});

export default router;