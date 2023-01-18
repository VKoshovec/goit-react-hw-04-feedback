import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({
    title, 
    children
}) => {
    return (
        <section className={ css.board } >
           <h1 className={ css.title }>{ title }</h1>
               { children }
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default  Section;