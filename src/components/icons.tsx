import { type LucideIcon, type LucideProps } from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <svg
      width='78'
      height='30'
      viewBox='0 0 78 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g clipPath='url(#a)'>
        <circle cx='22.189' cy='19.02' fill='url(#b)' r='10.034' />
        <circle cx='18.844' cy='14.56' fill='#fff' r='2.23' />
        <circle cx='45.603' cy='19.02' fill='url(#c)' r='10.034' />
        <circle cx='41.143' cy='14.56' fill='#fff' r='2.23' />
        <rect x='.415' width='6.59' height='29.094' rx='3.295' fill='#8D27ED' />
        <rect
          x='73.372'
          y='7.536'
          width='5.316'
          height='15.255'
          rx='2.658'
          transform='rotate(45 73.372 7.536)'
          fill='#6825FD'
        />
        <rect
          x='77.744'
          y='26.067'
          width='5.562'
          height='15.915'
          rx='2.781'
          transform='rotate(135 77.744 26.067)'
          fill='#6825FD'
        />
        <rect
          x='60.777'
          width='6.59'
          height='29.094'
          rx='3.295'
          fill='#8D27ED'
        />
      </g>
      <defs>
        <linearGradient
          id='b'
          x1='22.189'
          y1='8.986'
          x2='22.189'
          y2='29.054'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6613D1' />
          <stop offset='1' stopColor='#CD57EE' />
        </linearGradient>
        <linearGradient
          id='c'
          x1='45.603'
          y1='8.986'
          x2='45.603'
          y2='29.054'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6613D1' />
          <stop offset='1' stopColor='#CD57EE' />
        </linearGradient>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h78v30H0z' />
        </clipPath>
      </defs>
    </svg>
  ),
  search: ({ ...props }: LucideProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M9.363 14.455a5.091 5.091 0 1 0 0-10.182 5.091 5.091 0 0 0 0 10.182Zm6.364 1.27-2.768-2.768'
        stroke='#9B9D9F'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  add: ({ ...props }: LucideProps) => (
    <svg
      width='15'
      height='14'
      viewBox='0 0 15 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M7.65 2.336v9.074M3.113 6.871h9.074'
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  delete: ({ ...props }: LucideProps) => (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M8.713 17.667c0 .736.64 1.333 1.429 1.333h5.714c.79 0 1.429-.597 1.429-1.333v-8H8.713v8Zm9.286-10h-2.5L14.785 7h-3.572l-.714.667h-2.5V9h10V7.667Z'
        fill='#9B9D9F'
      />
    </svg>
  ),
  checkCircle: ({ ...props }: LucideProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g
        clipPath='url(#a)'
        stroke='#fff'
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M18.334 9.233V10a8.334 8.334 0 1 1-4.942-7.617' />
        <path d='M18.333 3.333 10 11.675l-2.5-2.5' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h20v20H0z' />
        </clipPath>
      </defs>
    </svg>
  ),
};
