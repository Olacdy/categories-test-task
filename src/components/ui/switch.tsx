import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'group peer inline-flex h-[26px] w-[47px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-switch transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
    ref={ref}>
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-full bg-muted-foreground shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-[2px] data-[state=checked]:bg-success'
      )}
    />
    <span className='block translate-x-1.5 select-none text-[11px] font-bold text-muted-foreground group-data-[state=checked]:hidden'>
      Off
    </span>
    <span className='block -translate-x-[11px] select-none text-[11px] font-bold text-success group-data-[state=unchecked]:hidden'>
      On
    </span>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
