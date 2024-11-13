const telas = {
    mobile: '480px',
    tablet: '600px',
    monitor: '1300px'
}

const responsive = {
    mobile: `(max-width: ${telas.mobile})`,
    tablet: `(max-width: ${telas.tablet})`,
    monitor: `(max-width: ${telas.monitor})`,
}

export default responsive