// pages/api/config.js
import config from '../../config';

export default function handler(req, res) {
  res.status(200).json({ BEARER_TOKEN: config.BEARER_TOKEN });
}
