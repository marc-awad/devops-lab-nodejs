/**
 * GET /version → { version: "<package.json version>" }
 * Reuses getPackageInfo() from utils/appInfo.js to avoid duplicating package.json reads.
 */
import { Router } from 'express'
import { getPackageInfo } from '../../utils/appInfo.js'

const router = Router()

router.get('/version', (_req, res) => {
  const { version } = getPackageInfo()
  res.status(200).json({ version })
})

export default router
