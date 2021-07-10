import React from 'react'
import { AnimeList } from '../components/AnimeList'
import { Header } from '../components/Header'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <AnimeList />
    </>
  )
}
