import React from 'react';
import { Outlet } from 'react-router-dom';
import AccessibilityTypography from '@components/AccessibilityTypography';
import './style.css';

export interface AboutProps {}

export const About: React.FC<AboutProps> = (): JSX.Element => {
  return (
    <>
      <main className="about">
        <Outlet />
        <AccessibilityTypography padding={'10rem 3rem'} textAlign={'center'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          gravida nibh, ullamcorper rhoncus nibh. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus nunc elit, vehicula eget dolor
          nec, euismod dignissim libero.
        </AccessibilityTypography>
      </main>
    </>
  );
};

export default About;
