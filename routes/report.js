const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// POST /api/reports/report
router.post('/report', async (req, res) => {
  const report = new Report(req.body);
  try {
    await report.save();
    res.status(201).send(report);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
