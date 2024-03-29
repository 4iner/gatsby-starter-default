import * as React from 'react';
import PropTypes from 'prop-types';
import styled from './styled';
import { Link } from 'gatsby';

const Button = ({ title, onClick, to, className }) => {
    const redirect = to ? 'window.location.href = ' + to : null;
    return (
        <ButtonDiv onclick={redirect}>
            <Link to={to}>
                <button className={className} onClick={onClick}>
                    {title}
                </button>
            </Link>
        </ButtonDiv>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.function,
    to: PropTypes.string,
    tooltip: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    siteTitle: '',
};

const ButtonDiv = styled('div')`
    border-radius: ${({ theme }) => theme.size.spacing.small}px;
    border-width: ${({ theme }) => theme.size.spacing.border}px;
    border-style: outset;
    border-color: buttonborder;
    background-image: radial-gradient(
        ellipse at center,
        ${({ theme }) => theme.color.primary} 25%,
        ${({ theme }) => theme.color.secondary} 100%
    );
    box-sizing: border-box;
    overflow: hidden;
`;

const StyledButton = styled(Button)`
    border: 0;
    width: 100%;
    color: black;
    box-sizing: border-box;
    font-size: 15px;
    padding: ${({ theme }) => theme.size.spacing.small}px;
    background-image: radial-gradient(
        ellipse at center,
        ${({ theme }) => theme.color.secondary} 0%,
        ${({ theme }) => theme.color.primary} 100%
    );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 50% 0%;
    background-color: rgba(0, 0, 0, 0);

    transition:
        background-size 0.5s,
        color 0.5s;
    &:hover {
        color: white;
        background-size: 100% 100%;
        // background-position: 0% 150%;
    }
`;

export default StyledButton;
