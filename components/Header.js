import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.bar}>
          <div>
            <Link href='/'>
              <Image
                src='/img/logo.svg'
                alt='GuitarLA'
                width={400}
                height={100}
              />
            </Link>
          </div>

          <nav className={styles.navigation}>
            <Link href='/'>Home</Link>
            <Link href='/about-us'>About Us</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/store'>Store</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
