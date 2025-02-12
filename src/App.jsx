import './App.css'

function App() {


  return (
    <div
      className="w-full md:h-screen flex items-center justify-center"
      role="main"
    >
      <div className='w-full md:w-[635px] h-full md:h-auto flex flex-col md:flex-colums items-center md:p-0 p-10'>
        <div className='py-[50px] px-[40px] rounded-tl-lg rounded-tr-lg bg-white mt-10 mt-0'>
          <h1 className='mb-5 text-2xl text-[var(--Cyan)] font-bold'>Join our community</h1>
          <p className='mb-4 text-[var(--Bright-Yellow)] font-bold'>30-day, hassle-free money back guarantee</p>
          <p className='text-[var(--Grayish-Blue)]'>Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className='w-full h-full md:h-auto flex flex-col md:flex-row'>
          <div className='w-full md:w-[50%] flex flex-col text-white bg-[var(--Cyan)] py-[50px] px-[40px] rounded-0 md:rounded-bl-lg'>
            <p className='mb-4 text-[1.2rem]'>Monthly Subscription</p>
            <p className='mb-4 inline-flex items-center space-x-2'><span className='text-3xl'>$29</span><span className='text-[var(--Light-Gray)]'>per month</span></p>
            <p>Full access for less than $1 a day</p>
            <button className='bg-[var(--Bright-Yellow)] w-full p-3 rounded-lg mt-8'>Sign Up</button>
          </div>
          <div className='w-full md:w-[50%] flex flex-col text-white bg-[#4abebd] py-[50px] px-[40px] rounded-br-lg rounded-bl-lg md:rounded-bl-none'>
            <p className='mb-4 text-[1.2rem]'>Why Us</p>
            <ol className='text-[0.9rem]'>
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
