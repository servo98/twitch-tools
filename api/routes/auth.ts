import { Router } from 'express';

import { authController } from '@controllers';


const router = Router();

router.post('v1/login', authController.login);

export default router;