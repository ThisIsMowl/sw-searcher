import React from 'react'
import helpers from '../../helpers/helpers'

const FilmPanel = (props) => {
  let { episode_id: episodeId, title: filmTitle } = props.data
  const { opening_crawl: openingCrawl } = props.data

  if (episodeId) {
    episodeId = helpers.toRoman(episodeId)
    filmTitle = filmTitle.toUpperCase()

    return (
      <div>
        <div className="text-center">
          <h1>STAR WARS</h1>
          <h2>EPISODE {episodeId}</h2>
          <h2>{filmTitle}</h2>
        </div>
        <div className="opening-crawl">
          <p>{openingCrawl}</p>
        </div>
      </div>
    )
  }
  return null
}

export default FilmPanel
