import { Request, Response } from 'express'
import { IService, Point, Query, TypedRequestBody } from '../entities/types'

type BodyPost = {
  name: string,
  x: number,
  y: number
}

export default class Controller {
  private service: IService

  constructor (service: IService) {
    this.service = service
  }

  async handlerGETRequest (req: Request, res: Response): Promise<void> {
    const queryParams = req.query
    if (queryParams.distance && queryParams.x && queryParams.y) {
      const query = new Query(
        Number(queryParams.distance),
        Number(queryParams.x),
        Number(queryParams.y)
      )
      const points = await this.service.getPointsByDistance(query)
      res.status(200).json(points)
      return
    }
    const points = await this.service.getAllPoints()
    res.status(200).json(points)
  }

  async handlerPOSTRequest (req: TypedRequestBody<BodyPost>, res: Response): Promise<void> {
    const { name, x, y } = req.body
    const newPoint = new Point(name, x, y)
    await this.service.createNewPoint(newPoint)
    res.status(201).end()
  }
}
