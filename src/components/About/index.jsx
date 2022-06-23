import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={'text-animate'}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis ligula, gravida a viverra eget, vestibulum et libero. Quisque euismod efficitur erat, ornare ornare orci fermentum at. Nam et ex nec turpis ultrices sagittis. Donec eget quam at massa euismod mattis in non eros. Nam libero metus, condimentum eget lectus luctus, bibendum dictum arcu. In rutrum imperdiet tristique. Ut dignissim commodo posuere. Proin mauris ante, consequat a nibh et, facilisis auctor velit. Curabitur quis massa rhoncus, sollicitudin ante nec, condimentum odio. Pellentesque sed mauris eu leo feugiat rhoncus. Curabitur et iaculis nunc. Vestibulum non vestibulum sapien, in pharetra odio. Curabitur gravida nunc id sem vulputate mattis. Maecenas vitae orci id orci convallis mattis quis nec erat. Sed massa metus, dignissim ac cursus eget, mollis tincidunt lorem.
                </p>
                <p>
                    Sed eu urna lectus. Ut efficitur justo quis consectetur euismod. Sed pulvinar ac lacus a accumsan. Etiam cursus pharetra elit non sollicitudin. Vestibulum lobortis, elit vitae pharetra vestibulum, ante eros dapibus tortor, ut viverra tortor ligula id leo. Integer a lectus hendrerit, lacinia dolor ut, congue lorem. Suspendisse rhoncus, sem ut sodales luctus, felis orci accumsan erat, id gravida sapien felis nec lorem.
                </p>
                <p>
                    Sed eu urna lectus. Ut efficitur justo quis consectetur euismod. Sed pulvinar ac lacus a accumsan. Etiam cursus pharetra elit non sollicitudin. Vestibulum lobortis, elit vitae pharetra vestibulum, ante eros dapibus tortor, ut viverra tortor ligula id leo. Integer a lectus hendrerit, lacinia dolor ut, congue lorem. Suspendisse rhoncus, sem ut sodales luctus, felis orci accumsan erat, id gravida sapien felis nec lorem.
                </p>
            </div>
        </div>
    )
}

export default About
