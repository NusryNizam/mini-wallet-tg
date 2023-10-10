const { Router } = require('express')
const mainController = require('../controllers/mainControllers')
const { auth } = require('../middleware/authMiddleware')

const router = Router();

router.get('/entries', auth, mainController.getEntries)
router.get('/entries/:year/:month', auth, mainController.getEntriesByMonth);
router.post('/entries', auth, mainController.addEntry)
router.delete('/entries', auth, mainController.deleteEntries)

module.exports = router