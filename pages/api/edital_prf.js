
import edital from '../../edital_prf.js';

export default function handler(req, res) {
  res.status(200).json({ EDITAL: edital.EDITAL_PRF });
}
