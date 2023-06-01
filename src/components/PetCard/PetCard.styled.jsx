import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/trash.svg';

export const HiddenInput = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const CardWrapper = styled.div`
  padding-top: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[4] + 4}px;
  padding-right: ${p => p.theme.space[4] + 4}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.small};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.section};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    align-items: flex-start;
    // justify-content: center;
    gap: ${p => p.theme.space[5]}px;

    border-radius: ${p => p.theme.radii.big};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-left: ${p => p.theme.space[4] + 4}px;
    padding-right: ${p => p.theme.space[4] + 12}px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  display: block;
  height: auto;

  border-radius: ${p => p.theme.radii.small};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 161px;
    border-radius: ${p => p.theme.radii.big};
  }
`;

export const PetInfo = styled.p`
  margin-bottom: ${p => p.theme.space[1] + 10}px;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    line-height: ${p => p.theme.lineHeights.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    &:nth-child(3) {
      margin-bottom: ${p => p.theme.space[0]}px;
    }

    &:last-child {
      margin-top: ${p => p.theme.space[4]}px;
    }
  }
`;

export const PetTitle = styled.span`
  font-family: ${p => p.theme.fonts.textMedium};
`;

export const BtnDelete = styled.button`
  position: absolute;

  top: ${p => p.theme.space[4] + 4}px;
  // right: ${p => p.theme.space[0]}px;
  left: 215px;

  border: ${p => p.theme.borders.none};

  color: ${p => p.theme.colors.hintTxt};
  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    position: static;
    width: ${p => p.theme.space[5]}px;
    height: ${p => p.theme.space[5]}px;
    margin-left: auto;

    left: 0;

    border-radius: ${p => p.theme.radii.circular};
    background-color: ${p => p.theme.colors.background};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    left: 536px;
  }
`;

export const DeleteIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: rgb(245, 146, 86);
`;
