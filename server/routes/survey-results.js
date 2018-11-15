const express = require('express');
const router = express.Router();

router.get('/survey_results', (req, res) => {
  res.json({
    "survey_results": [
      {
        "name": "Simple Survey",
        "url": "/survey_results/1.json",
        "participant_count": 6,
        "response_rate": 0.8333333333333334,
        "submitted_response_count": 5
      },
      {
        "name": "Acme Engagement Survey",
        "url": "/survey_results/2.json",
        "participant_count": 271,
        "response_rate": 1.0,
        "submitted_response_count": 271
      }
    ]
  })
});

module.exports = router;