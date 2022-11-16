import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import {Component} from 'react'
import './index.css'
import Header from '../Header/index'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="home-container">
        <Header />
        <div style={{display: 'flex'}}>
          <div className="home-content">
            <div>
              <h1> Clothes That Get YOU Noticed </h1>
              <p>
                Fashion is part of the daily air and it does not quite help that
                it changes all the time. Clothes have always been a marker of
                the era and we are in a revolution. Your fashion makes you been
                seen and heard that way you are. So, celebrate the seasons new
                and exciting fashion in your own way.
              </p>
              <Link to="/products">
                <button
                  type="button"
                  className="button"
                  onClick={this.onclickLogoutButton}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-img-prop"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
