
import APOSTILAS from '../../apostilas.js';

export default function handler(req, res) {
  res.status(200).json({ APOSTILAS: APOSTILAS.APOSTILAS });
}
