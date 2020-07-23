import { HttpResponse } from '../protocols/http'
import { ServerError } from '../exceptions/server-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 400,
  body: new ServerError()
})
