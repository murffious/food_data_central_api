import dotenv from 'dotenv';
import { FDCService } from './src/services/fdcServiceSimple.js';

dotenv.config();

const apiKey = process.env.FDC_API_KEY;
const fdc = new FDCService(apiKey);

try {
  const food = await fdc.getFoodDetails(174988);
  console.log(JSON.stringify(food, null, 2));
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
