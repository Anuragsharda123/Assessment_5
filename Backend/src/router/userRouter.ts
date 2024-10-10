import {Router} from 'express';
import { upload } from '../middleware/upload';
import { Validator } from '../middleware/userValidation';
import {getUser} from '../controller/userController'


const router = Router()

router.get("/", upload.single('resume'), Validator, getUser)

export default router;