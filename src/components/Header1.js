import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header3 ${className}`}>
      <div className="lowest-price-plans">
        <div className="lowest-price-ever-container1">
          <span>
            {`Lowest Price Ever Forever! Data Plans in 130+ Destinations Starting froum Just %1.59. `}
            <span className="buy-now1">Buy Now</span>
            {` `}
          </span>
        </div>
        <img
          className="lowest-price-plans-child"
          loading="lazy"
          alt=""
          src="/arrow-1.svg"
        />
      </div>
      <div className="header-actions">
        <div className="shop-plans-action">
          <div className="alpine-sphere">
            <img
              className="mask-group-icon1"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <h3 className="alpinesphere1">AlpineSphere</h3>
          </div>
          <div className="shop-plans-parent">
            <div className="shop-plans2">Shop Plans</div>
            <div className="resources-group">
              <div className="resources2">Resources</div>
              <img className="arrow-down-icon3" alt="" src="/arrowdown.svg" />
            </div>
            <div className="download1">Download</div>
            <FormControl
              className="parent"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "82px",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1c1c1c",
                  fontSize: 14,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/arrowdown-1.svg"
                    style={{}}
                  />
                )}
              >
                <MenuItem>Explore</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="sign-up-action">
          <div className="sign-up2">Sign up</div>
          <Button
            className="button1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#8e59ff",
              borderRadius: "10px",
              "&:hover": { background: "#8e59ff" },
              height: 43,
            }}
          >
            Login
          </Button>
          <div className="language-dropdown">
            <img
              className="global-icon1"
              loading="lazy"
              alt=""
              src="/global.svg"
            />
            <div className="en1">EN</div>
            <img
              className="arrow-down-icon4"
              loading="lazy"
              alt=""
              src="/arrowdown.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
