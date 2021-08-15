import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: "100%",
  },
  lowerMenu: {
    width: "100%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
  },
  content: {
    margin: 0,
  },
}));

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .0)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    margin: 0,
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #a0a0a0;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #959595;
`;
export const DescriprionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: black;
  }
`;
