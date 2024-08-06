import React from 'react'

function BackgroundImage({imageURL, alt}) {
    const style ={
        position:'absolute',
        left:'0',
        top:'0',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        zIndex:'-1'
    }
  return (
    <div style={style}>
        {/* <img src={imageURL} alt={alt}/> */}
    </div>
  )
}

export default BackgroundImage
