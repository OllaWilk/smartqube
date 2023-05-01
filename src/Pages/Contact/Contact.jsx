import { Subscribe } from '../../Components';
import img from '../../images/air-con-head-reduced.jpg';
import './_Contact.scss';

export const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='img-wrap'>
        <img src={img} alt='' />
      </div>
      <Subscribe />
    </div>
  );
};
