import React from 'react';

/**
 * H1 – Major heading.
 *
 * It uses an <h1> element with radical typography that works well on
 * mobile (text-3xl) and desktops (text-5xl). The default color adapts
 * to both light and dark mode via Tailwind’s dark: variant.
 */
const H1 = React.forwardRef(function H1({ children, className = "", ...props }, ref) {
  return (
    <h1
      ref={ref}
      className={`font-extrabold text-3xl sm:text-5xl tracking-tight text-gray-900 dark:text-slate-100 ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
});

export default H1;
