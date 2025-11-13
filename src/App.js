import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Popular from './components/Pages/Popular'
import TopRated from './components/Pages/TopRated'
import Upcoming from './components/Pages/Upcoming'
import SearchResults from './components/Pages/SearchResults'
import MovieDetailsPage from './components/Pages/MovieDetailsPage'

export default function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Popular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/search" component={SearchResults} />
        <Route path="/movie/:id" component={MovieDetailsPage} />

        <Redirect to="/" />
      </Switch>
    </>
  )
}
