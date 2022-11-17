import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  onclickLogoutButton = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ul className="̥nav-container">
        <Link to="/">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-img-prop"
              alt="website logo"
            />
          </li>
        </Link>

        <li style={{display: 'flex'}}>
          <Link to="/">
            <p className="large-screen">Home</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              className="header-icon-img-prop"
              alt="nav home"
            />
          </Link>
          <Link to="products">
            <p className="large-screen">Products</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              className="header-icon-img-prop"
              alt="nav products"
            />
          </Link>
          <Link to="cart">
            <p className="large-screen">Cart</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              className="header-icon-img-prop"
              alt="nav cart"
            />
          </Link>
        </li>

        <li>
          <button
            type="button"
            className="button large-screen"
            onClick={this.onclickLogoutButton}
          >
            Logout
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="header-icon-img-prop"
            alt="nav logout"
            onClick={this.onclickLogoutButton}
          />
        </li>
      </ul>
    )
  }
}

export default withRouter(Header)
