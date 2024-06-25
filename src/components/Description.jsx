import myImage from "../assets/anup.jpg"

const Description = () => {
    return (
        <section id="description">
        <div>
            <div className="flex ml-14">
            <div className="inset-0 flex flex-col justify-center ml-48">
                <style>
                    {`
                .text-outline-black {
                    color: transparent;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: black;
                }
                `}
                </style>
                <div className="absolute grid grid-cols-1 gap-y-0 mb-60 ml-14">
                    <div className="flex flex-col mt-52">
                    <div className="relative">
                        <p className="text-[6rem] font-bold text-gray-300 opacity-75 transform translate-x-1 translate-y-1">
                            Over
                        </p>
                        <p className="text-[6rem] font-bold text-outline-black absolute top-2 left-2">
                            Over
                        </p>
                    </div>
                    <div className="relative mt-[-4rem]">
                        <p className="text-[6rem] font-bold text-gray-300 opacity-75 transform translate-x-1 translate-y-1">
                            view
                        </p>
                        <p className="text-[6rem] font-bold text-outline-black absolute top-2 left-2">
                            view
                        </p>
                    </div>
                    <img src={myImage} alt="anup" className="w-48 h-52 ml-5 mt-6 shadow-lg rounded-xl shadow-gray-500"/>
                    </div>
                </div>
            </div>
                <div className="flex-col ml-[22rem] mt-16">
                    <p className="text-base">Hello! My name is anup and i enjoy creating things that live one <br/>
                    the internet. My interest in erb development and UI designing <br/>started back in 2018
                    when i decided to try editing custom designs <br/> - turns out hacking together a custom reblog button
                    button taught me a<br/>lot about HTML & CSS!</p>
                    <p className="text-base mt-6">Fast-forward to today, and i've had the privilege of working at an <br/>
                        <span className="text-blue-500">design and development agency, a start-up, a huge corporation,<br/> and a
                        user-centric design studio.</span>
                        My main focus these days is<br/> building accessible, inclusive products digital experiences
                        at<br/> <span className="text-blue-500">PegaLogics</span> for a variety of clients to scale the business.
                    </p>
                    <p className="text-base mt-6">Here are the technologies i've been working with recently</p>
                    <ul className="flex space-x-28 list-disc ml-5 mt-6">
                        <div className="grid">
                            <li>HTMl & CSS</li>
                            <li>React</li>
                            <li>Javascript</li>
                        </div>
                        <div className="grid">
                            <li>MongoDB</li>
                            <li>Java</li>
                            <li>Express</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Description;
