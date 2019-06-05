import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import kaozidd from '../images/kaozidd.jpg'
import ebriopes from '../images/ebriopes.jpg'
import angeltronics from '../images/angeltronics.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hola, <br /> Somos PsyCode.
        </BigTitle>
        <Subtitle>Diseño accesible y conectividad sencilla</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Proyectos</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Salón de Belleza WebPage"
            link="http://psycode-salon.surge.sh"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Ésta es una página web sencilla con cuatro vistas para promocionar un salón de belleza.
          </ProjectCard>
          <ProjectCard
            title="Simulador EXANI-I"
            link="http://psycode-exani.surge.sh/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Éste es un examen de opción múltiple que simula la prueba de admisión EXANI-I.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Nosotros</Title>
        <AboutHero>
          <Avatar src={kaozidd} alt="Kaozidd" />
          <AboutSub>
            Nunca olvides lo que te hace diferente, y no dejes que te ciegue, que te detenga o que te hiera.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Demasiado inquieto para mi propio bien, decidioso y bipolar. Soy la clase de persona a la que le pides los consejos que sabes que nunca aplicará en su vida.
        </AboutDesc>
        <AboutHero>
          <AboutSub>
          Hace tiempo que los humanos no sólo percibimos el mundo con los cinco sentidos, sino también con el conocimiento.
          </AboutSub>
          <Avatar src={angeltronics} alt="Angeltronics" />
        </AboutHero>
        <AboutDesc>
          Joven estudiante, con empleo, deportista, aficionado a la programación, a los videojuegos y a tocar el teclado. Tengo 23 años, actualmente estudio una carrera en Ingeniería Mecatrónica, soy Cinta Negra Tercer Dan en Karate-Do, trabajo de instructor de Karate tres días a la semana y mi tiempo libre lo aprovecho desarrollando mis habilidades musicales.
        </AboutDesc>
        <AboutHero>
          <Avatar src={ebriopes} alt="Ebriopes" />
          <AboutSub>
          Evita a costa de lo posible las mentiras y engaños.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Yo ser un sujeto simple que trata de evitar problemas y enfrentamientos en su vida. Raramente comprende su alrededor, aún así trata de involucrarse en su entorno.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Contáctanos</Title>
          <ContactText>
            Síguenos en{' '}
            <a href="https://www.facebook.com/PsyCodeDev">Facebook</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Made by Arturo Ortega,{' '}
          software developer at PsyCode&trade;{' '}
          based on template by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
