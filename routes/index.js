// import router
const router = require('express').Router();

// import module for notes 
const notesRoutes = require('./notes');

// Use routes 
router.use('/api/notes', notesRoutes);

// export router
module.exports = router;