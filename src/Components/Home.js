import React from 'react';
import './Home.css';
import Main from './Imgs/main.jpeg'
import Mbgr from './Imgs/mrbg.png'
import Img2 from './Imgs/2.webp'
import Img3 from './Imgs/3.webp'


export default function Home() {
    return (
        <div className='font'>


            <div className='container-fluid home ' >
                <div className='container-fluid navbgo'>
                    <nav class="navbar container navbar-expand-lg navbar-dark navv">
                        <div class="container-fluid">
                            <a class="navbar-brand d-block d-md-none" href="#"><h2 class="">Mutant</h2></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="mob-navbar">
                                <ul class="navbar-nav mb-2 mb-lg-0 ">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#About">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#Rd">Road Map</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#Team">Team</a>
                                    </li>
                                </ul>
                                <form class="d-flex btnns">
                                    <div class="social-buttons text-center">
                                        <button class="neo-button">
                                            <i class="fa fa-facebook fa-2x"></i>
                                        </button>
                                        <button class="neo-button">
                                            <i class="buttons fab fa-discord  text-white"></i>
                                        </button>
                                        <button class="neo-button">
                                            <i class="fab fa-medium-m  text-white"></i>
                                        </button>
                                        <button class="neo-button">
                                            <i class="fa fa-twitter ">
                                            </i>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </nav>
                </div>


















                {/* <div className='d-flex flex-row-reverse ico  px-5 pt-5'>
                    <i class="fab fa-twitter NavBtn px-3  h2 text-white  "></i>
                    <i class="fab fa-medium-m NavBtn px-3  h2 text-white"></i>
                    <i class="fab fa-instagram NavBtn px-3  h2 text-white"></i>
                    <i class="fab fa-discord NavBtn px-3  h2 text-white"></i>
                </div> */}
                <div className='  imgb' >
                    <div className='overlay d-flex flex-column justify-content-end' >
                        <div className='text-center'>
                            <div className=''>
                            <img src={Mbgr} className='imgy '></img>
                            </div>
                            {/* <h2 className='text-white'>Mutant Soldiers By</h2> */}
                            <h1 className=" centered text-white h1">The <span  className="Blazing" contenteditable="true">Exotic </span> Pitbulls</h1>
                            {/* <h2 className='text-white'>1st collection</h2> */}

                        </div>
                        <div className='text-center '>
                            <br></br>
                            <button type="button" class="Wbtn btn btn-lg px-5 mb-5">CONNECT YOUR WALLET</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid Dis' >
                <div className="container ">
                    <br /><br />
                    <a id='About'></a>
                    <div className="row align-items-center py-5  px-md-5">
                        <div className="col-12 col-md-1 "></div>
                        <div className="col-12 col-md-5 ">
                            <p className="text-white">
                                {/* <h2>The <span className='Tclr'>Exotic </span> Pitbulls</h2> */}

                                <h2>The <span className='Tclr'>Exotic </span> Pitbulls</h2>
                                
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.     
                            </p><br />
                        </div>
                        <div className="col-12 col-md-5 " >
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators ">
                                    <div className='d'>
                                    <li  data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    </div>
                                    <div className='d'>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    </div>
                                    <div className=' d'>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </div>
                                </ol>
                                <div className="carousel-inner  ">
                                    <div className="carousel-item active borderr">
                                        <img className="d-block w-100  pb-5" src={Main} alt="First slide"></img>
                                    </div>
                                    <div className="carousel-item borderr">
                                        <img className="d-block w-100  pb-5" src={Main} alt="Second slide"></img>
                                    </div>
                                    <div className="carousel-item borderr">
                                        <img className="d-block w-100  pb-5 " src={Main} alt="Third slide"></img>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a><br />
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a><br />
                            </div>
                        </div>
                        <div className="col-12 col-md-1 "></div>

                    </div>
                </div>



                <a id='Rd'></a>

                <div class="container">
                    <h1 className='h1 text-white text-center'>ROADMAP</h1><br /><br />

                    <div class="main-timeline">

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <i class="fas fa-dice-one ia"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title sa">Stage 1</h5>
                                <p class="description text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <i class="fas fa-dice-two ib"></i>

                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title sb">Stage 2</h5>
                                <p class="description text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <i class="fas fa-dice-three ic "></i>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title sc">Stage 3</h5>
                                <p class="description text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <i class="fas fa-dice-four id"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title sd">Stage 4</h5>
                                <p class="description text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <i class="fas fa-dice-five ie"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title se">Stage 5</h5>
                                <p class="description text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>














                <a id='Team'></a>

                <div className='container  py-5' >
                    <h2 className='h1 text-white text-center pb-2 pt-5' >Members</h2>
                    <div className='row' >
                        <div className='col-12 col-md-4 py-3' >
                            <div className='border w-100 ' >
                                <img className="d-block w-100  " src={Main} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >Johs</h3>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 py-3' >
                            <div className='border w-100' >
                                <img className="d-block w-100 " src={Main} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >Alan</h3>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 py-3' >
                            <div className='border w-100' >
                                <img className="d-block w-100 " src={Main} alt="First slide"></img>
                                <h3 className='text-white text-center pt-3' >Sabir Pro</h3>
                            </div>
                        </div>

                    </div>
                </div>






                <div className="container">
                    <div class="container">
                        <a id="Faq"></a>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title text-center wow zoomIn mt-5">
                                    <h1 className="titletext h1 text-center pb-3 text-warning">Frequently Asked Questions</h1>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How do I get whitelisted?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <p className="text-white">
                                                    You can get Whitelisted by following the steps on our discord
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingTwo">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How can I buy a Lazy Leopard NFT?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="panel-body text-white">
                                                <p>You will be able to purchase a lazy Leopard NFT directly on this website with Ethereum (ETH) by using the MetaMask extension.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What is the mint price of Lazy Leopard NFT ?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body text-white">
                                                <p>Our Pre-Sale mint price is 0.06 ETH + gas fees per NFT. Our Whitelisted members will be allowed to mint two NFTs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFour">
                                            <h4 class="panel-title text-white">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    How long after minting will my NFT be revealed?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                            <div class="panel-body text-white">
                                                <p>The reveal will be 5 days after launch. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingFive">
                                            <h4 class="panel-title text-white">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    How can I contact the team?
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                            <div class="panel-body text-white">
                                                <p>We are all super active, you can find us on Discord and Twitter and Instagram! </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>











                {/* <div class="container">
                    <div class="row py-5 ">
                        
                        <div class="col-md-12 border">
                        <h2 className='h1 text-white text-center ' >FAQ`s</h2>
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                When does the first collection launch?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body ">
                                            <p>The Mutant Soldiers collection releases on (date). A whitelist pre-sale will take place on (date).</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                When will the second collection launch?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body">
                                            <p>The TBA second collection is currently scheduled for (Q?) 2022 </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How do I access the Whitelist for the first collection?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div class="panel-body">
                                            <p>Follow our Twitter & Instagram, and join our Discord for options to get onto the whitelist!
                                                You can get on the whitelist through Discord activity or through social media & Discord giveaways
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingFour">
                                        <h4 class="panel-title">
                                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                Is the game free-to-play?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                        <div class="panel-body">
                                            <p>The game itself is free-to-play, but you need an NFT from The Endless Expanse collections. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingFive">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                                                How much will the NFT cost?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFive" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFive">
                                        <div class="panel-body ">
                                            <p>The whitelist sale price is 0.07. The public sale price is 0.08 ETH. </p>
                                        </div>
                                    </div>
                                </div>


                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingF">
                                        <h4 class="panel-title">
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseF" aria-expanded="true" aria-controls="collapseOne">
                                                Suggestions for further information:
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseF" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingF">
                                        <div class="panel-body ">
                                            <p>NFT Collection details (price/mint size/blockchain) outside of FAQs - UNDER THE TITLE<br></br>


                                                Separate Mutant Soldiers and The Endless Expanse. More focused copy for the header, and a separate section which covers the mutants in-depth.<br></br>


                                                Section for whitelisting outside the FAQs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <br></br>
                <hr className='text-white' ></hr>
                <div className='container text-center py-2 text-white  ' >
                    <p><i className="fab fa-discord Footer px-1"></i> <i className=" px-1 Footer fab fa-twitter"></i> <span className='px-1 Footer'>© 2021, Mutants NFTs</span> </p>
                    <p ></p>

                </div>


            </div>
        </div>
    )

}
