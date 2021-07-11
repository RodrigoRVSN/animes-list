export interface IAnimes {
  mal_id: number
  image_url: string
  title: string
  score: number
  synopsis: string
  type: string
  url: string
  start_date: Date
  end_date: Date | null
}
