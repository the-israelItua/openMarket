// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, CartItem } = initSchema(schema);

export {
  Product,
  CartItem
};