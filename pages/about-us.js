import Image from 'next/image';
import Layout from './../components/Layout';

import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <Layout page='About us'>
      <main className='container'>
        <h2 className='heading'>About us</h2>

        <div className={styles.content}>
          <Image
            layout='responsive'
            width={600}
            height={450}
            src='/img/nosotros.jpg'
            alt='Nosotros'
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
              amet gravida sapien. Nunc id felis quis sapien congue semper nec
              at sapien. Donec congue vulputate enim eget eleifend. Nam ac
              dapibus ipsum. Vestibulum cursus vehicula diam, a tincidunt dolor
              faucibus in. In sodales quam purus, nec porta ligula pharetra
              quis. Nulla eu eleifend massa.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
