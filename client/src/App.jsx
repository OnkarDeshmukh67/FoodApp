import { useAuth0 } from "@auth0/auth0-react"

import Homepage from "./pages/Homepage"
import PostingPage from "./pages/PostingPage"

function App() {

  const { user , loginWithRedirect , logout , isAuthenticated } = useAuth0()

  return (
    <>
      {/* <div className="w-screen h-screen flex flex-col justify-center items-center">
        {isAuthenticated ? <button className="w-24 h-12 border rounded-2xl" onClick={e => logout()}>logout</button> : <button className="w-24 h-12 border rounded-2xl" onClick={e => {loginWithRedirect()}}>login</button>}
        {isAuthenticated? <Homepage /> : <p>nothing</p>} 
      </div> */}
      <Homepage />
      {/* <PostingPage /> */}
    </>
  )
}

export default App
