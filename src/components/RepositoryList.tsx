import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"

interface Repository {
  name: string
  description: string
  html_url: string
  archived: boolean
}

export function RepositoryList(props: Repository) {
  const [repositories, setRepositores] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositores(data.filter((repo: Repository) => !repo.archived)))
  }, [])

  return (
    <section className="bg-gradient-to-r to-indigo-400 from-indigo-700 ...">
      <h1 className="text-white text-3xl text-center font-bold pt-8">Lista de repositorios da RocketSeat</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}
