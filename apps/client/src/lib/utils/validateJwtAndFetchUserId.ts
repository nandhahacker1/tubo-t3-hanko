import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import * as jose from 'jose'

import { env } from '@/env'

const hankoApiUrl = env.NEXT_PUBLIC_HANKO_API_URL

export async function validateJwtAndFetchUserId() {
  const token = cookies().get('hanko')?.value

  if (!token) {
    return redirect('/login')
  }

  const JWKS = jose.createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  )

  let payload =  null

  try {
    const verifiedJWT = await jose.jwtVerify(token, JWKS)
    payload = verifiedJWT.payload
  } catch {
    console.log('Invalid JWT');
  }

  const userID = payload!.sub

  return userID
}