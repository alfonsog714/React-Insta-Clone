import React from "react";
import Logo from "../../assets/ig_logo.png";
import styled from "styled-components";
// import "./SearchBar.css";

const Header = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(184, 179, 179, 0.555);
  padding: 1rem;
  background: #fff;
`;

const LogoHeader = styled.div`
  height: 60px;
`;

const IGLogo = styled.img`
  height: 100%;
`;

const SocialIconsDiv = styled.div`
  display: flex;
`;

const SocialIcons = styled.i`
  margin-left: 15px;
  cursor: pointer;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <IGLogo src={Logo} alt="IG Logo" />
      </LogoHeader>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={props.searchPosts}
        />
      </div>
      <SocialIconsDiv>
        <SocialIcons className="far fa-compass fa-2x" />
        <SocialIcons className="far fa-user fa-2x" />
        <SocialIcons className="far fa-heart fa-2x" />
      </SocialIconsDiv>
    </Header>
  );
};

export default SearchBar;

// const SearchBar = props => {
//   return (
//     <div className="header">
//       <div className="logos">
//         <img src={Logo} alt="IG Logo" className="ig-logo" />
//       </div>
//       <div className="search-input-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           onKeyDown={props.searchPosts}
//         />
//       </div>
//       <div className="social-icons">
//         <i className="far fa-compass fa-2x" />
//         <i className="far fa-user fa-2x" />
//         <i className="far fa-heart fa-2x" />
//       </div>
//     </div>
//   );
// };
