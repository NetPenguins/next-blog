import Image from './Image'
import Link from './Link'
import ExpandableDescription from './ExpandMore'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md flex max-w-[544px] items-stretch p-4">
    <div
      className={`${
        imgSrc && 'h-full'
      }  flex flex-col overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <ExpandableDescription description={description} />
        </div>
        {href && (
          <Link
            href={href}
            className="mt-auto pt-3 text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more →
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
