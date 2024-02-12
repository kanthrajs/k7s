import styled from "styled-components";


const Links = () => {



    return (

        <LinkContainer>
            <TopPart>
                <LinkHeader>
                    <Title>
                        <h1>Hello</h1>
                    </Title>
                </LinkHeader>

                {/* Bio Section */}
                <LinkBio>
                    <h1>My name is Kanthraj, I am a software developer in fullstack web development.</h1>
                    <h4>I am bootstrapping my portfolio and this is just getting started.</h4>
                </LinkBio>

                <WebLinkWrap>

                    <LinkSection className="social">
                        <div className="iconsonly">
                            <a href='https://x.com' target="_blank" rel="noreferrer">
                                <LinkBox className="socialIcon">
                                    <img src="/twitter.svg" alt="twitter_logo"></img>
                                </LinkBox>
                            </a>
                            <a href='https://linkedin.com' target="_blank" rel="noreferrer">
                                <LinkBox className="socialIcon">
                                    <img src="/linkedin.svg" alt="linkedin_logo"></img>
                                </LinkBox>
                            </a>
                        </div>
                    </LinkSection>

                    <LinkSection className="social">
                        <h3> My Portfolio</h3>
                        <div className="iconsonly">
                            
                                {/* <LinkBox>
                                    <LinkTitle><p>Adding soon...</p></LinkTitle>
                                </LinkBox> */}
                            
                            {/* <a href='/' target="_blank" rel="noreferrer">
                                <LinkBox>
                                    <LinkTitle><p>This is just a p tag</p></LinkTitle>
                                </LinkBox>
                            </a> */}
                        </div>
                        <p>Adding soon ...</p>
                    </LinkSection>

                </WebLinkWrap>
                {/* End Weblinks */}
            </TopPart>
            <BottomPart>
                <LinkFoot>
                    <h4>Copyright © 2023. All rights reserved.</h4>
                </LinkFoot>
            </BottomPart>

        </LinkContainer>


    )
};

export default Links;

const LinkContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.bg.primary};
`

const LinkHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 12px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       margin-top: 20px;
    }
`


const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: -2px;
      background: linear-gradient(90deg, #4AB1F1 5.71%, #566CEC 33.77%, #D749AF 61.82%, #FF7C51 91.21%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 2.5rem;
      }
    }
    h3{
      margin-top:6px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: -.7px;
      color: ${({ theme }) => theme.text.secondary};
      opacity: .5;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 15px;
        margin-top:2px;
      }
    }
    
 
    .name{
      margin-top: 8px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        width: 140px;
      }
    }
    .handle{
      height: 32px;
      margin-top: 6px;
      margin-bottom: 6px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        height: 26px;
      }
    }
`

const LinkBio = styled.div`
    display: flex;
    flex-direction: column;
    h1{
      font-size: 22px;
      line-height: 30px;
      font-weight: 500;
      letter-spacing: -0.6px;
      padding: 0 20px;
      color: ${({ theme }) => theme.text.primary};
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 18px;
        line-height: 26px;
        padding: 0 8px;

      }
      vertical-align: middle;
      span{
        font-size: 12px;
        vertical-align: bottom;
        line-height: 30px;
        color: ${({ theme }) => theme.text.secondary};
        margin: 0 2px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 10px;
          line-height: 20px;
        }
      }
    }
    h4{
      font-size: 18px;
      letter-spacing: -.5px;
      margin: 10px 0;
      color: ${({ theme }) => theme.text.secondary};
      font-weight: 500;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 15px;
          padding: 0 20px;
          line-height: 24px;
        }
      a{
         font-weight: 700;
         opacity: .7;
         &:hover{
          opacity: 1;
         }
      }
    }

`

const TopPart = styled.div`
    
`



const BottomPart = styled.div`
    margin-bottom: 40px;
    
`
const LinkFoot = styled.div`
    h4{
      color: ${({ theme }) => theme.text.secondary};
      line-height: 32px;
      letter-spacing: -.2px;
      font-size: 16px;
      font-weight: 500;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 12px;
      }
      span{
        font-size: 10px;
        vertical-align: bottom;
        line-height: 32px;
        margin: 0 2px;
        opacity: .6;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 8px;
        }
      }
    }
`

const WebLinkWrap = styled.div`
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       padding: 0 12px;
    }
`


const LinkSection = styled.div`
    padding: 12px 0;
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
    &.social{
      max-width: max-content;
      padding: 0;
      margin-bottom: 18px;
    }
    .iconsonly{
      display: flex;
      justify-content: center;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        flex-wrap: wrap;
      }
    }
    h3{
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.text.secondary};
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 11px;
      }
    }
    p{
        color: ${({ theme }) => theme.text.secondary};
      }
`

const LinkBox = styled.div`
    padding: 18px 20px;
    border-radius: 12px;
    margin: 8px 18px;
    border: 1px solid ${({ theme }) => theme.bg.secondary};
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -.5px;
    position: relative;
    text-align: center;
    position: relative;
    
    &::before{
      content: "";
      border-radius: 12px;
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      transform: scale(0.8);
    }
    &:hover{
    transition: all 333ms ease 0s;
    border-color: transparent;
      &::before{
        opacity: 1;
        background: ${({ theme }) => theme.bg.hover};
        transition: all 333ms ease 0s;
        transform: scale(1);
      }
    }
    .new-up{
      transform: scale(.8);
      opacity: .7;
    }
    
    &.socialIcon{
      padding: 16px;
      border-radius: 50%;
      border: none;
      margin: 4px;
      img{
        height: 2.5rem;
        filter:${({ theme }) => theme.img.filter};
      }
     
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        padding: 10px;
        margin: 2px;
        img{
          height: 2.5rem;
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      padding: 12px 16px;
      font-size: 16px;
    }
`
// const LinkTitle = styled.div`
//   display: flex;
//   font-size: 18px;
//   align-items: center;
//     @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
//       font-size: 14px;
//     }
//     img{
//       height: 20px;
//       margin-right: 10px;
//     }
// `
