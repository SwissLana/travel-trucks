import clsx from 'clsx';

import styles from './Button.module.css';

function Button({
  as: Component = 'button',
  variant = 'primary',
  className,
  children,
  type,
  ...restProps
}) {
  const buttonType = Component === 'button' ? (type ?? 'button') : undefined;

  return (
    <Component
      className={clsx(styles.button, styles[variant], className)}
      type={buttonType}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Button;
