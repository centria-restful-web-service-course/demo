const express = require('express');

const appointmentsRepo = require('../repos/appointmentRepo');

const verifyAccessToken = require('../middlewares/auth');

const router = express.Router();

router.get('/:id', verifyAccessToken, async (req, res, next) => {
  appointmentsRepo.getByID(req.params.id, (data) => {
    if (data) {
      res.status(200).json({
        status: 200,
        statusText: 'OK',
        message: 'Single appointment retrieved.',
        data,
      });
    } else {
      res.status(404).send({
        status: 404,
        statusText: 'Not Found',
        message: `The appointment ${req.params.id} could not be found.`,
        error: {
          code: 'NOT_FOUND',
          message: `The appointment ${req.params.id} could not be found.`,
        },
      });
    }
  }, (err) => {
    next(err);
  });
});

router.get('', verifyAccessToken, async (req, res, next) => {
  const { date } = req.query;
  appointmentsRepo.getByDate(date, (data) => {
    res.status(200).json(data);
  }, (err) => {
    next(err);
  });
});

// router.post('', async (req, res, next) => {

// });

module.exports = router;
