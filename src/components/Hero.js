import React from 'react'
import letterFigures from '../assets/images/letters.png'
import heroWoman from '../assets/images/hero-woman.png'

export default function Hero() {
    return (
        <div className='hero'>
            <h1>Body Shapes Of Women</h1>
            <h2>Most Common Shapes of Women</h2>
            <p>The secret of the ideal style lies not only in following fashion trends, </p>
            <p>but also in choosing a style, taking into account the type of figure. </p>
            <button>identify your shape</button>
            <img src={letterFigures} alt="letter figurs" />
            <img src={heroWoman} alt="elegant woman" />
            <p>In many cases, body shapes need to be corrected, there are very few perfect ones. Flattering your shape is all about finding balance. The point is, the more balanced your silhouette appears, the more visually pleasing your outfit will be.</p>
        </div>
    )
}
