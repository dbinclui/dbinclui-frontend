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
          nec, euismod dignissim libero. Quisque eget efficitur lorem. Ut at
          rhoncus neque. Donec facilisis finibus faucibus. Fusce tincidunt elit
          at nisl venenatis, viverra bibendum augue volutpat. Curabitur pretium
          elit nisl, nec fringilla sem faucibus quis. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis a lorem non mauris congue iaculis in eu velit. Fusce
          eget pharetra nisl. Integer ut finibus massa. Cras rutrum est nec
          ligula sollicitudin vehicula at sed est. Donec ornare tempor
          porttitor. Pellentesque arcu eros, interdum ut leo quis, fermentum
          consequat purus. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur gravida eleifend massa eu
          vehicula. Nulla eu faucibus eros. Aliquam commodo ex a massa euismod,
          egestas ornare massa consequat. Mauris mi metus, viverra id dictum
          vel, feugiat quis elit. Etiam ut ipsum ut risus rhoncus facilisis.
          Nunc congue diam id ex rhoncus, ut imperdiet est accumsan. Nulla id
          lacinia eros. Morbi justo lectus, vestibulum eget bibendum imperdiet,
          mattis eget justo. Maecenas sit amet malesuada erat. Proin sed est in
          justo efficitur fringilla. Donec diam tortor, efficitur vel sem eget,
          interdum eleifend massa. Nullam elementum vulputate congue. Donec
          interdum ornare metus nec iaculis. Integer eu sodales lectus, sit amet
          luctus mi. Ut consectetur sem et dolor ultricies iaculis. Nam mi
          dolor, molestie in facilisis id, maximus vitae erat. Aenean laoreet
          odio est, sit amet pulvinar sem sodales in. Ut nec dignissim massa.
          Curabitur imperdiet eros et nunc maximus, in tempus nulla porttitor.
          Sed condimentum nibh feugiat placerat congue.
        </AccessibilityTypography>
      </main>
    </>
  );
};

export default About;
