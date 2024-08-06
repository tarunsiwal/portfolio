import React from 'react'

function AppLogoCircle(imageURL) {
  const style={
    height:'100px',
    width:'100px',

  }
  console.log({imageURL});

  return (
    <div style={style}>
      <img src={imageURL} alt=''/>
    </div>
  )
}

export default AppLogoCircle
