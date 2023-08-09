import React from 'react';
import styles from './styles.module.scss';

interface ValueProps {
  title: string;
  description: string;
}

const Values: React.FC<ValueProps> = ({ title, description }) => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.topInfo}>
        <h3>{title}</h3> 
        <img src='leftArrow.svg' className='leftArrow'/>
        </div>
        <p>
        {description} 
        </p>
      </div>
    </div>
  );
};

export default Values;