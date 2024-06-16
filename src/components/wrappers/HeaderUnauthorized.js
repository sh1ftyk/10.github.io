import Header from '../design/Header/Header'

const HeaderUnauthorized = () => {
  return <Header authorized={false} />
}
HeaderUnauthorized.defaultProps = {}
HeaderUnauthorized.propTypes = {}

export default HeaderUnauthorized
