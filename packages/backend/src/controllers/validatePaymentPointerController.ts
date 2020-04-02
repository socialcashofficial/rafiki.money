import { AppContext } from '../app'
import got from 'got'
import { paymentPointerToURL } from '../utils'

const isOpenPaymentsUrl = async (paymentPointer: string): Promise<boolean> => {
  try {
    const url = new URL(paymentPointerToURL(paymentPointer))
    const openPaymentsUrl = url.origin + '/.well-known/open-payments'
    const { body } = await got.get(openPaymentsUrl)
    const jsonBody = JSON.parse(body)
    return !!jsonBody.issuer
  } catch (error) {
    return false
  }
}

const isSPSPUrl = async (paymentPointer: string): Promise<boolean> => {
  try {
    const url = new URL(paymentPointerToURL(paymentPointer))
    url.pathname += '/.well-known/pay'
    const spspUrl = url.toString()
    const { body } = await got.get(spspUrl, {
      headers: {
        'Accept': 'application/spsp4+json'
      }
    })
    console.log(body)
    const jsonBody = JSON.parse(body)
    return !!jsonBody.destination_account
  } catch (error) {
    return false
  }
}

export async function show (ctx: AppContext): Promise<void> {
  const queryParams = ctx.query

  const paymentPointer = queryParams.pp

  if (!paymentPointer) {

  }

  if (await isOpenPaymentsUrl(paymentPointer)) {
    ctx.body = {
      type: 'open-payments'
    }
  }
  if (await isSPSPUrl(paymentPointer)) {
    ctx.body = {
      type: 'spsp'
    }
  }
}
