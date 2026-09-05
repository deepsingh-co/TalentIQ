import './App.css'
import { SignedOut, SignInButton,SignedIn, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Welcome to the Applicationn</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button className=''>Sign up please</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
 
        <UserButton />

    </>
  );
}

export default App;
