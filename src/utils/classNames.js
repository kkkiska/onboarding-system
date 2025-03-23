export const getNavLinkClass = ({ isActive }, baseClass, activeClass) => {
    return isActive ? `${baseClass} ${activeClass}` : baseClass;
  };