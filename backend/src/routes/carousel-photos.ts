import { Router } from 'express'
import { CarouselPhotosController } from '../controllers/carousel-photos.controller'

const router = Router()
const carouselPhotosController = new CarouselPhotosController()

// Маршруты для фотографий карусели
router.get('/', carouselPhotosController.getAllPhotos)
router.get('/:id', carouselPhotosController.getPhoto)
router.post('/', carouselPhotosController.createPhoto)
router.put('/:id', carouselPhotosController.updatePhoto)
router.delete('/:id', carouselPhotosController.deletePhoto)

export default router 