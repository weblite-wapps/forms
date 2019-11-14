import React from 'react'
import PropTypes from 'prop-types'
// components
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 20px 16px',
  },
  image: {
    width: 'auto',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block',
    margin: 'auto',
  },
}))
const Image = ({ src, alt }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={src} alt={alt} className={classes.image} />
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
Image.defaultProps = {
  alt: 'Preview',
}

export default Image
