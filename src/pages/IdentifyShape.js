import React from 'react'
import measureFigur from '../assets/images/measure-figure.png'
import identifyFigurHourglass from '../assets/images/identify-figur-hourglass.png'
import identifyFigurInvertedTriangle from '../assets/images/identify-figur-inverted-triangle.png'
import identifyFigurTriangle from '../assets/images/identify-figur-triangle.png'
import identifyFigurRectangle from '../assets/images/identify-figur-rectangle.png'
import identifyFigurApple from '../assets/images/identify-figur-apple.png'


export default function IdentifyShape() {
    return (
        <div>
            <div>
                <h2>Identifying the Shape of Your Body</h2>
                <h3>Measure Yourself</h3>
                <p>You might be able to figure out your body type just by looking at yourself in the full-size mirror with no clothes on, or just your underwear.</p>
                <p>However, if you want to be more specific, the best method is to take some measurements, so grab a tape measure.</p>
                <p>Body shape is based on those factors - not on your weight. Understanding and accepting your body type is a lovely step towards self-love.</p>

                <img src={measureFigur} alt="measure woman figure" />

                <h3>Measurements</h3>

                <h4>Shoulders</h4>
                <p>Stand up straight and relaxed, and wrap the measuring tape around the top of your shoulders, at their broadest point above the shoulder blades.</p>

                <h4>Bust</h4>
                <p>Stand normally, and wrap the measuring tape around the fullest part of your bust without compressing your chest.</p>

                <h4>Waist</h4>
                <p>Wrap the measuring tape around the narrowest part of your waist, usually located just above the belly button.</p>

                <h1>Hips</h1>
                <p>Place the measuring tape around the fullest part of your hip, including the butt, just below your hip bones.</p>
            </div>

            <div>
                <h2>5 Most Common Body Shapes</h2>
                <h3>Find Your Shape</h3>
                <p>The five main body type shapes are rectangle, inverted triangle, hourglass, pear and apple. </p>

                <div className="figure">
                    <img src={identifyFigurHourglass} alt="figure hourglass" />
                    <h3>Hourglass</h3>
                    <p>defined waist with equal brust and hips</p>
                    <button>more info</button>
                </div>
                <div className="figure">
                    <img src={identifyFigurInvertedTriangle} alt="figure inverted triangle" />
                    <h3>Inverted Triangle</h3>
                    <p>broad shouldered with narrow hips</p>
                    <button>more info</button>
                </div>
                <div className="figure">
                    <img src={identifyFigurTriangle} alt="figure triangle" />
                    <h3>Triangle</h3>
                    <p>brust and waist narrower than hips</p>
                    <button>more info</button>
                </div>
                <div className="figure">
                    <img src={identifyFigurRectangle} alt="figure rectangle" />
                    <h3>Rectangle</h3>
                    <p>straight waisted with equal brust and hips</p>
                    <button>more info</button>
                </div>
                <div className="figure">
                    <img src={identifyFigurApple} alt="figure oval" />
                    <h3>Oval</h3>
                    <p>waist wider than brust and hips</p>
                    <button>more info</button>
                </div>
            </div>
        </div>
    )
}
