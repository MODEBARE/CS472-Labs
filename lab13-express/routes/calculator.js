const express = require('express');
const router = express.Router();

function parseNumbers(req) {
    let a, b;
    if (req.params.a && req.params.b) {
        a = parseFloat(req.params.a);
        b = parseFloat(req.params.b);
    } else if (req.query.a && req.query.b) {
        a = parseFloat(req.query.a);
        b = parseFloat(req.query.b);
    } else if (req.body.a && req.body.b) {
        a = parseFloat(req.body.a);
        b = parseFloat(req.body.b);
    }
    return { a, b };
}

function respondWithResult(res, result) {
    res.json({ results: result });
}

router.get('/addition/:a/:b', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a + b);
});
router.get('/addition', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a + b);
});
router.post('/addition', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a + b);
});

router.get('/subtraction/:a/:b', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a - b);
});
router.get('/subtraction', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a - b);
});
router.post('/subtraction', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a - b);
});

router.get('/multiplication/:a/:b', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a * b);
});
router.get('/multiplication', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a * b);
});
router.post('/multiplication', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a * b);
});

router.get('/division/:a/:b', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a / b);
});
router.get('/division', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a / b);
});
router.post('/division', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a / b);
});

router.get('/modulus/:a/:b', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a % b);
});
router.get('/modulus', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a % b);
});
router.post('/modulus', (req, res) => {
    const { a, b } = parseNumbers(req);
    respondWithResult(res, a % b);
});

module.exports = router;