import React from 'react'
import { AnimeList } from '../components/AnimeList'
import { Header } from '../components/Header'
import { Input } from '../components/Input'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Input />
      <AnimeList />
    </>
  )
}
