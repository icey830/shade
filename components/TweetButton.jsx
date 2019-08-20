
import React from 'react'
import weiboScript from '../src/weibo-script'

class WeiboButton extends React.Component {

  render () {
    let script = {
      __html: weiboScript
    }
    let text = 'Mathematically-derived gradient explorer'
    return (
      <div className="inline-block">
        <a href="http://service.weibo.com/share/share.php?url=https://elvbadges.elvns.com"
          className="weibo-share-button">
          weibo
        </a>
        <script dangerouslySetInnerHTML={script} />
      </div>
    )
  }

}

export default WeiboButton

