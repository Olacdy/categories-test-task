'use client';

import { FC, ReactNode } from 'react';

import { LazyMotion, domAnimation } from 'framer-motion';

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default Providers;
