import { IRelated } from './IRelated'

export type IAnimeInfo = {
  duration: string
  trailer_url: string
  related: {
    Other: IRelated[]
    ['Parent story']: IRelated[]
    Prequel: IRelated[]
  }
  mal_id: number
  image_url: string
  title: string
  score: number
  synopsis: string
  type: string
  url: string
}
