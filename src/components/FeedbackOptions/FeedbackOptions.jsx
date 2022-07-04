import { PropTypes } from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => (
          <Button
            type="input"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
