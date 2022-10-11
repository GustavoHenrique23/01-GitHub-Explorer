import { RepositoryItem } from "./RepositoryItem"
import "../styles/respositories.scss"
import { useState, useEffect } from "react"

export function RepositoryList() {
    const [repositories, setRepositores] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then((response) => response.json())
            .then((data) => setRepositores(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map((repository) => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}
