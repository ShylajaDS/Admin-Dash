import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    marginLeft: '357px',
    width: 'calc(100% - 365px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    fontSize: '14px',
    marginTop: '-60px',
    fontFamily:'Poppins'
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  aboutLink: {
    marginRight: '13px', 
    textDecoration: 'none',
  },
  link: {
    textDecoration: 'none',
    marginRight: '25px',
  },
  separator: {
    marginRight: '11px', 
  },
});

const Footer = ({ copyright }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div>{copyright} &copy; XD</div>
      <div className={classes.linkContainer}>
        <a href="/about" className={classes.aboutLink}>About</a>
        <span className={classes.separator}> | </span>
        <a href="/support" className={classes.link}>Support</a>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    copyright: state.footer.copyright,
  };
};

export default connect(mapStateToProps)(Footer);
