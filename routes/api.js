const express = require('express');
const router = express.Router();

router.get( '/', (req, res) => {
    res.json( { content: 'Hello API' } );
});

module.exports = router;