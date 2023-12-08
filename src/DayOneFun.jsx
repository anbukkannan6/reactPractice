import React, { useState } from "react";


function DayOneFun(props) {
    // let data = [
    //     {
    //         id: 1,
    //         name: 'Bertie Yates',
    //         age: 29,
    //         image:
    //             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    //     },
    //     {
    //         id: 2,
    //         name: 'Hester Hogan',
    //         age: 32,
    //         image:
    //             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    //     },
    //     {
    //         id: 3,
    //         name: 'Larry Little',
    //         age: 36,
    //         image:
    //             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    //     },
    //     {
    //         id: 4,
    //         name: 'Sean Walsh',
    //         age: 34,
    //         image:
    //             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    //     },
    //     {
    //         id: 5,
    //         name: 'Lola Gardner',
    //         age: 29,
    //         image:
    //             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    //     },
    // ];


     newData = [
        {
            id: 1,
            title: "Do I have to allow the use of cookies?",
            info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
        },
        {
            id: 2,
            title: "How do I change my My Page password?",
            info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        },
        {
            id: 3,
            title: "What is BankID?",
            info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        },
        {
            id: 4,
            title: "Whose birth number can I use?",
            info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
        },
        {
            id: 5,
            title: "When do I recieve a password ordered by letter?",
            info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
        },
    ]


    let showData = {
        show1: false
    }

    const [detail, setDetail] = useState(newData)

    const [show, setShow] = useState(showData)

    console.log(show);




    // const show = ()=>{
    //     setCount(
    //         count+1
    //     )
    // }

    const isShow = () => {
        setShow({show:true})

    }



    return (
        <>
            {
                detail.map((e) => (
                    <div key={e.id}>

                        <h1>{e.title}</h1>
                        <button onClick={isShow}>+</button>
                        {show || <h3>{e.info}</h3>}
                   
                    </div>
                )

                )
            }

            <button >Increment</button>

        </>
    )
}

export default DayOneFun;
