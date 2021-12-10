import PropTypes from "prop-types";

import Button from "../Button";
import { GrRefresh } from "react-icons/gr";
import { CgPlayTrackPrevO, CgPlayTrackNextO } from "react-icons/cg";
import ControlContainer from "../StyledComponents/ControlContainer";
import Container from "../StyledComponents/Container";

import s from "../Button/Button.module.css";
import styles from "./QuotePage.module.css";

export default function QuoteContainer({
  author,
  quote,
  onButtonClick: { onButtonRefreshClick, onButtonPrevClick, onButtonNextClick },
}) {
  return (
    <Container>
      <div className={styles.thumb}>
        <p className={styles.quote}>{quote}</p>
        <p className={styles.author}> {author}</p>
      </div>

      <ControlContainer>
        <Button name="prev" type="button" onClick={onButtonPrevClick}>
          <CgPlayTrackPrevO className={s.btn__icon} />
        </Button>
        <Button name="refresh" type="button" onClick={onButtonRefreshClick}>
          <GrRefresh className={s.btn__icon} />
        </Button>
        <Button name="next" type="button" onClick={onButtonNextClick}>
          <CgPlayTrackNextO className={s.btn__icon} />
        </Button>
      </ControlContainer>
    </Container>
  );
}

QuoteContainer.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  onButtonClick: PropTypes.objectOf(PropTypes.func),
};
