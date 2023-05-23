import React from 'react';
import {
  ArticleWithSubstract,
  BlackBtn,
  Cart,
  Header,
  ImageBox,
  PortfolioCart,
  SectionTitle,
  ServicesIconAndAbstract,
  Testimonial,
} from '../../Components/index.js';
import cart1 from '../../images/cart-1.jpg';
import cart2 from '../../images/cart-2.jpg';
import cart3 from '../../images/cart-3.jpg';
import idesign from '../../images/i-design.png';
import iintegration from '../../images/i-integration.png';
import iservice from '../../images/i-service.png';
import iupgrade from '../../images/i-upgrade.png';
import iadvice from '../../images/i-advice.png';
import map from '../../images/map.png';
import iMap from '../../images/i-map.png';
import iMail from '../../images/i-mail.png';
import iPhone from '../../images/i-phone.png';

import './_Home.scss';

export const Home = () => {
  return (
    <div className='home-page'>
      {/* Splash */}
      <div className='home-page__splash'>
        <Header />
      </div>
      {/* About US */}
      <div className='home-page__about'>
        <div className='container '>
          <ArticleWithSubstract
            subtitle={'welcome to'}
            title={'SmartQube'}
            abstract={`We are a team of engineers and designers in the air conditioning
          industry, passionate about delivering innovative solutions to meet our
          clients' needs.`}
            firstParagraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus.
          Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue
          metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus
          ut cursus sem. Vestibulum feugiat eros lorem, vitae faucibus arcu
          aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis
          felis, vel luctus sapien nisi non orci. Ut laoreet ante tellus, vel
          hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit ac rutrum.`}
            secondParagraph={`Donec porttitor turpis eu mi tempus facilisis. Maecenas id ullamcorper
          elit, quis tempus enim. In dignissim dolor in accumsan tincidunt.
          Donec vel diam vitae risus elementum congue. Cras varius, enim vitae
          condimentum mattis, erat lacus.`}
          />
        </div>
      </div>
      {/* Offer */}
      <div className='home-page__offer '>
        <div className='offer-wrap container'>
          <Cart
            title='Cooling products'
            abstract='Iceqube is a company that supplies a diverse range of high-quality
        products. Smartqube utilizes their product line and also acts as a
        distributor for Europe and Asia.'
            url={cart1}
          />
          <Cart
            title='Projects'
            abstract='Discover our projects and be inspired by our work. Let us show you what we can create.'
            url={cart2}
          />
          <Cart
            title='Integration'
            abstract='We specialize in integrating industrial cooling systems for optimal performance and efficiency, tailoring custom solutions to each client`s specific needs.'
            url={cart3}
          />
        </div>
      </div>
      {/* Call to action */}
      <div className='home-page__call-to-action'>
        <div className='container call-to-action-wrap'>
          <div className='headlings-wrap'>
            <h4>Have Any Questions ?</h4>
            <h2>​Don't Hesitate to Contact Us Any Time.</h2>
          </div>
          <BlackBtn text='Contact us' />
        </div>
      </div>
      {/* Services */}
      <div className='home-page__services'>
        <div className='container'>
          <div className='headlines-wrap'>
            <SectionTitle h2='our best services' h3='what we do' />
          </div>
          <div className='row-one'>
            <ServicesIconAndAbstract
              icon={idesign}
              title='Design and consulting'
              abstract='We assist clients in designing refrigeration systems to ensure optimal performance and energy efficiency.'
            />
            <ServicesIconAndAbstract
              icon={iintegration}
              title='System integration'
              abstract='We combine various refrigeration systems to ensure effective operation and increase their lifespan.'
            />
            <ServicesIconAndAbstract
              icon={iservice}
              title='Service and maintenance'
              abstract='We offer full service and maintenance support to ensure refrigeration systems operate efficiently and reliably.'
            />
          </div>
          <div className='row-two'>
            <ServicesIconAndAbstract
              icon={iupgrade}
              title='Upgrades and expansions'
              abstract='We upgrade and expand existing systems to improve their performance and energy efficiency.'
            />
            <ServicesIconAndAbstract
              icon={iadvice}
              title='Technical advice'
              abstract='We provide clients with expert advice on the best technical solutions to ensure optimal operation of refrigeration systems.'
            />
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className='home-page__portfolio'>
        <div className=''>
          <div className='headlines-wrap'>
            <SectionTitle h2='recent projects' h3='portfolio' />
          </div>
          <div className='portfolio-cart-wrap '>
            <PortfolioCart img={cart3} />
            <PortfolioCart img={cart2} />
            <PortfolioCart img={cart1} />
          </div>
        </div>
      </div>
      {/* Our Mission */}
      <div className='home-page__mission'>
        <div className='container mission-layout'>
          <ImageBox url={map} src='map' />
          <div className='text-content-wrap'>
            <div className='headlines-wrap'>
              <SectionTitle h2='Quality Comes First' h3='Our Mission' />
            </div>
            <p>
              "Our team is our greatest asset, which is why we invest in their
              continuous development to provide them not only with the knowledge
              and tools needed to do their job, but also with job satisfaction
              and a sense of belonging to our company. As a result, our
              customers receive the most advanced solutions in the field of
              refrigeration and air conditioning, which meet their requirements
              and are tailored to their needs. Our high quality services also
              have a positive impact on the environment, thanks to the use of
              eco-friendly technologies and our focus on energy efficiency."
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className='home-page__testimonials'>
        <div className='container'>
          <div className='headlines-wrap'>
            <SectionTitle h2='WHAT people say' h3='TESTIMONIALS' />
          </div>
          <div className='testimonials-wrap'>
            <Testimonial
              text=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        gravida cursus eleifend. Nullam ornare sapien.'
              name='Wojciech Zawadzki'
              company='EnHive'
            />
            <Testimonial
              text=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        gravida cursus eleifend. Nullam ornare sapien. '
              name='Eyad XXX'
              company='ABB Egipt'
            />
            <Testimonial
              text=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        gravida cursus eleifend. Nullam ornare sapien.'
              name='Jan Kowalski'
              company='Simens'
            />
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className='home-page__contact'>
        <div className='container content-wrap'>
          <div className='contact-box'>
            <img src={iMap} alt='map-icon' />
            <div className='abstract-wrap'>
              <h3>Visit us</h3>
              <p>
                ul. Rakietowa 29A
                <br />
                54-615 Wrocław
                <br />
                Poland
              </p>
            </div>
          </div>
          <div className='contact-box'>
            <img src={iMail} alt='map-icon' />
            <div className='abstract-wrap'>
              <h3>Email us</h3>
              <p>
                SmartQube
                <br />
                gorny@smartqube.com
              </p>
            </div>
          </div>
          <div className='contact-box'>
            <img src={iPhone} alt='map-icon' />

            <div className='abstract-wrap'>
              <h3>Call us</h3>
              <p>
                Grzegorz Górny
                <br />
                +48 660-25-33-96
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
