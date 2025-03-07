import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Cardcomponent from './components/Cardcomponent'
import Listgroup from './components/Listgroup'
import Average from './components/Average'

import ThemeContext from './provider/theme/ThemeContext'
import Theme from './components/Theme'
import { FeedbackProvider } from './provider/feedback/FeedbackContext'

const App = () => {

  const {theme} = useContext(ThemeContext)
  // let theme = true


  return (
    <FeedbackProvider>  

<Navbar/>
<div   id='container' className={theme? "container-fluid  py-5"  :"container-fluid bg-warning py-5 "}>
<Cardcomponent/>
<Average/>
<Listgroup/>
<Theme/>

</div>

    </FeedbackProvider>
  )
}

export default App