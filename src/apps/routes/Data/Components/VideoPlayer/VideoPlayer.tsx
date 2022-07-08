import { DefaultUi, Player, Youtube } from '@vime/react'
import type { FC } from 'react'

interface Props {
  videoId: string
}

const VideoPlayer: FC<Props> = ({ videoId }) => {
  return (
    <Player controls className="aspect-video">
      <Youtube videoId={videoId} />
      <DefaultUi />
    </Player>
  )
}

export default VideoPlayer
