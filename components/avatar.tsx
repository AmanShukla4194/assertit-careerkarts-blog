import Image from 'next/image'

export default function Avatar({ author }) {

  if (!author) {
    return null; // Return null or an error message if author is not provided
  }
  
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={author.node.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
