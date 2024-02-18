'use client'
import { useState } from 'react'

const ExpandableDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const truncatedDescription = isExpanded
    ? description
    : description?.length > 150
      ? description.slice(0, 150) + '... '
      : description

  return (
    <>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
        {truncatedDescription}
        {description?.length > 150 && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            [Show More]
          </button>
        )}
      </p>
      {description?.length > 150 && isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          [Show Less]
        </button>
      )}
    </>
  )
}

export default ExpandableDescription
