import { env } from '@/env'
import { Hanko } from '@teamhanko/hanko-elements'

if (!env.NEXT_PUBLIC_HANKO_API_URL) {
  throw new Error('Missing NEXT_PUBLIC_HANKO_API_URL environment variable')
}

const hankoApiUrl: string = env.NEXT_PUBLIC_HANKO_API_URL!
const hanko: Hanko = new Hanko(hankoApiUrl)

export default hanko