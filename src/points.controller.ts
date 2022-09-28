import { Request, Response } from 'express'
import { IService, Query } from './entities/types'

export default class Controller {
  private service: IService

  constructor (service: IService) {
    this.service = service
  }

  async handlerGETRequest (req: Request, res: Response): Promise<void> {
    const points = await this.service.getAllPoints()
    res.status(200).json(points)
    // const { distance, x, y } = req.query
    // const points = await this.service.getPointsByDistance(new Query(distance, x, y))
    // const [paramsAreOk, paramErrors] = validations.validateQueryParameters(req.query)
    // if (!paramsAreOk) {
    //   res.status(400).json({
    //     msg: 'bad request',
    //     errors: paramErrors
    //   })
    //   return
    // }
  }

  async handlerPOSTRequest (req: Request, res: Response): Promise<void> {}
}
