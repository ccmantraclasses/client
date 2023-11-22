import React, { lazy } from 'react';

import WhatsAppCom from 'src/components/whatsapp-com';

const HomeCarousel = lazy(() => import('src/components/home/home-carousel'));
const BrandingComponent = lazy(() =>
  import('src/components/home/branding-component/branding-component')
);
const ExamCategories = lazy(() => import('src/components/home/exam-categories'));
const Testimonials = lazy(() => import('src/components/home/testimonials'));
const GetContent = lazy(() => import('src/components/home/get-content'));

const HomeIndex = () => (
  <>
    <HomeCarousel />
    <BrandingComponent />
    <ExamCategories />
    <Testimonials />
    <GetContent />
    <WhatsAppCom />
  </>
);

export default HomeIndex;
