import images from "./images/pier.jpg"
import imagess from "./images/talks.jpg"
import sesimage from "./images/audience.jpg"
import { Data } from "./Data"
import React, { useState } from 'react'

export const Main = () => {
   const [image,setImage] = useState(0)
    const slider = [
        {id:1,title:"GET EXPERT GUIDANCE",info:"Our experts will be on-site to answer any questions you might have about Stripe products and services."},
        {id:2,title:" HEAR FROM THE EXPERTS",info:" From building new revenue streams to lowering costs, learn how your peers are adapting to the current economic climate."},
        {id:3,title:" EXPAND YOUR NETWORK",info:"Executives from leading companies across industries—from automotive to technology—attend Sessions."},
        {id:4,title:"JOIN A SELECT GROUP",info:"Sessions is our flagship event and capacity is limited for a more impactful experience."}  
    ]
    const clickfn1 =()=>setImage(image === slider.length-1 ? 0 : image + 1)
    const clickfn2 =()=>setImage(image === 0 ? slider.length-1 : image - 1)

  const img = [
    {id:1,img:"https://images.ctfassets.net/fzn2n1nzq965/1NF6Cko6oA0SLKkrcpSkgQ/7b2b8dc5f0d2f060b0afc0b54a856cfb/Speaker-Headshots_Jeff_Sherlock.jpg?q=60&w=590",title:"Jeff Sherlock"},
    {id:2,img:"https://images.ctfassets.net/fzn2n1nzq965/3lWeDoQSLuvxeZeWgxbb2e/92978d52eeb95ad9744a79c408412aa8/Speaker-Headshots_Jason_Fan.jpg?q=60&w=590",title:"Jason Fan"},
    {id:3,img:"https://images.ctfassets.net/fzn2n1nzq965/3VsgtTEg5Z6gJH5VyCoKwb/dc86862bc5e456cef9b658fb4fe80bfd/Speaker-Headshots_Ted_Power.jpg?q=60&w=590",title:"Ted Power"},
    {id:4,img:"https://images.ctfassets.net/fzn2n1nzq965/5o59FprW5r1pje4qlIbmie/f157256c47b5c4d34689217d8e597ed0/Speaker-Headshots_Rachel_Lea_Fishman.jpg?q=60&w=590",title:"Rachel Lea Fishman"},
    {id:5,img:"https://images.ctfassets.net/fzn2n1nzq965/2gzhItGqju2mX6mRVbXkz0/376e46ebe598f1db68ff676f8a1df5fb/Speaker-Headshots_Takao_Chitose.jpg?q=60&w=590",title:"Takao Chitose"}
  ]

  const Sponsers = [
    {id:1,title:"affirm"},
    {id:2,title:"aws"},
    {id:3,title:"HIVEWAY"},
    {id:4,title:"Infosys"},
    {id:5,title:"RevenueCat"},
    {id:6,title:"Stunning"},
    {id:7,title:"yft"},
    {id:8,title:"xero"},
    {id:9,title:"accenture"},
    {id:10,title:"adorsus"},
    {id:11,title:"afterpay"},
    {id:12,title:"koombea"},
    {id:13,title:"Myers-Holum"}
  ]

  return (
    <>
   <main>


                                 {/* navbar */}
        <nav>
            <div>Stripe <span><b>SESSIONS</b></span></div>
            <div className='links'>
                <ul>
                    <li><a href='#info'>Info</a></li>
                    <li><a href='#talks'>Talks</a></li>
                    <li><a href='#speakers'>Speakers</a></li>
                    <li><a href='#partners'>Sponsers</a></li>
                </ul>
            </div>
            <div className='link'>
               <a href='https://www.youtube.com/watch?v=5aqwPlMHFM8'>Watch the keynote</a>
            </div>
        </nav>
                                {/* section */}
                                  
            <div className='session'>
                <h1>SESS</h1>
                <h1>IONS</h1>
                <p>MAY 3 <span>|</span> IN PERSON <span>|</span> SAN FRANCISCO <span>|</span> PIER 48</p>
                <button><a href='https://www.youtube.com/watch?v=5aqwPlMHFM8'> Watch the keynote</a></button>
            </div>

                            {/* Info */}

            <div className='card' id="info">
                <div className='fcard'>
                    <h3 className='color-ani'>EVENT OVERVIEW</h3>
                    <p className='first'>A single day,a year’s worth of impact</p>
                    <p className='second'>Stripe Sessions brings together business leaders and builders to discuss the most important internet economy trends. This year, we’re focused on the many ways businesses can continue to accelerate progress in times of change.</p>  
                    <div>
                    {slider.map((item,index)=> image === index && 
                       <div className='slide' key={item.id}>
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                    </div>
                    )}
                    <div className='slider'>
                    <button onClick={clickfn1}></button>
                    <button onClick={clickfn2}></button>
                    </div>
                </div>
                </div>
                <div className='scard'>
                    <img src={images} alt='images' />
                     <div className='imgtext'>
                     <h3 className='color-ani'>SAN FRANCISCO</h3>
                     <p className='second'>Meet us at</p>
                     <p className='second'>Pier 48</p>
                     </div>
                </div>
            </div>

                    {/* Timer */}

            <div className="timer">
                <div className="seetime">
                  <h4>SEE YOU IN</h4>
                  <hr/>
                </div>
                <div className="time">
                    <div>
                        <h1>00</h1>
                        <p>Days</p>
                    </div>
                    <div>
                        <h1>00</h1>
                        <p>Hours</p>
                    </div>
                    <div>
                        <h1>00</h1>
                        <p>Minutes</p>
                    </div>
                    <div>
                        <h1>00</h1>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>

            {/* Conversation */}
            <div className="conver" id="talks">
                <div className="con1">
                <div className="con-text">
                   <h4>TALKS</h4>
                   <p>Join the</p>
                   <p>Conversation</p>
                    </div>
                   <img src={imagess} alt="con-images"/>
                </div>
                <div className="con2">
                   {Data.map((item,index)=>
                   <div key={item.id} className="information">
                    <div className="timestage">
                        <p>{item.time}</p>
                        <p>{item.stage}</p>
                        <p>{item.keynote}</p>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                    <div>
                        <hr/>
                    </div>
                   </div>)}
                      
                </div>
            </div>

            <div className="sessio">
                <h3 className="ses-text">An interactive conference about
                Stripe and the future of the internet economy</h3>
                   <img src={sesimage} alt="session-image"/>
            </div>
             <p id="speakers"></p>
            <div className="speakers">
                      <h3>Meet our speakers</h3>
                      <div>
                      <p>Our speaker lineup comprises leaders from Stripe and beyond, </p>
                      <p> who’ll share knowledge and advice on the most pressing topics</p>
                      <p>facing companies today. Stay tuned for more announcements.</p>
                      </div>
                      <div >
                        {img.map((item,index)=> 
                            <img  className="profile" title={item.title} key={item.id} src={item.img}  alt="speakers-image"/>
                        )}
                      </div>
            </div>
            <div id="partners"></div>
            <div className="partners">
            <h1>Meet our Sessions partners</h1>
            <div className="sponsers">
            {Sponsers.map((item,index)=><div  key={item.id}>{item.title}</div>)}
            </div>
            </div>

            <div className="spot">
                <h2>Save your spot</h2>
                <div className='sessions'>
                <p>MAY 3 <span>|</span> IN PERSON <span>|</span> SAN FRANCISCO <span>|</span> PIER 48</p>
                <button><a href='https://www.youtube.com/watch?v=5aqwPlMHFM8'> Watch the keynote</a></button>
            </div>
            </div>
            <footer>
                <div>
                    <p>Stripe <span>SESSION</span></p>
                    <p>For Sessions support, email registration@stripesessions.com</p>
                </div>
                <div>
                    <p>Visit Stripe.com</p>
                    <p>Privacy & terms</p>
                    <p>Cookie settings</p>
                </div>
            </footer>
    </main>
    </>
  )
}
