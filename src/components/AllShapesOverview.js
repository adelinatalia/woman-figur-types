import React, { useState, useEffect } from 'react'
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../Client";
import imgYes from '../assets/images/yes.png'
import imgNo from '../assets/images/no.png'

function urlFor(source) {
    return builder.image(source);
}
const builder = imageUrlBuilder(sanityClient);


export default function AllShapesOverview() {
    const [shapes, setShapes] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "allshapes"]`
            )
            .then((data) => setShapes(data))
            .catch(console.error);
    }, []);


    const reversedShapes = [].concat(shapes).reverse()

    return (
        <div>
            <h2>The women's body shapes and the suitable clothes</h2>

            {shapes &&
                reversedShapes.map((item, i) => (
                    <div key={i}>
                        <img src={urlFor(item.imgUrl)} alt={item.title} />

                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.description}</p>

                        <div>
                            <h3>The main goal</h3>
                            <p>{item.mainGoal}</p>
                        </div>

                        <ul>
                            <div>
                                <h3>What To Wear</h3>
                                <img src={imgYes} alt="good to wear" />
                            </div>
                            {item.suitables.map(item => {
                                return <li> {item} </li>
                            })
                            }
                        </ul>

                        <ul>
                            <div>
                                <h3>What Not To Wear</h3>
                                <img src={imgNo} alt="avoid to wear" />
                            </div>
                            {item.avoids.map(item => {
                                return <li> {item} </li>
                            })
                            }
                        </ul>
                    </div>
                ))}
        </div>
    )
}
