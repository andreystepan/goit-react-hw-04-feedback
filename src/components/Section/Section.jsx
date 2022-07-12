import { PropTypes } from 'prop-types';
import { Conteiner } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Conteiner>
      <h2>{title}</h2>
      {children}
    </Conteiner>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
