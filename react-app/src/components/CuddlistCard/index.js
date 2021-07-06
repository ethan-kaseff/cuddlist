import React from 'react'

function CuddlistCard({cuddlist}) {
  return (
    <div>
      <h4 className="cuddlist__name">{cuddlist.firstName}</h4>
      <p className="cuddlist__pronouns">{cuddlist.pronouns}</p>
      <p className="cuddlist__about__me__small">{cuddlist.aboutMe}</p>
    </div>
  )
}

export default CuddlistCard
