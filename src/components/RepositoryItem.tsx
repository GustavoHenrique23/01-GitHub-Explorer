interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="items-center flex flex-col text-2xl mt-5  uppercase text-white">
      <strong className="mt-4">{props.repository.name}</strong>
      <button className="border rounded-lg px-4 py-2 mt-4 shadow-xl mb-4 bg-white text-violet-700 ">
        <a href={props.repository.html_url}>Acessar repositório </a>
      </button>
      <hr className="w-2/4 shadow-md" />
    </li>
  )
}
