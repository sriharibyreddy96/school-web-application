import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import video1 from "../../assets/academics-video1.mp4";
import { FaPlay, FaPause, FaPhone } from "react-icons/fa";
import CountUp from "react-countup";
import Cards from "../home/Cards";
import image1 from '../../assets/academics-program1.jpg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;

  @media (max-width: 1118px) {
    flex-direction: column;
    align-items: start;
    margin-left: 20px;
    width: 100%;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const Description = styled.p`
  margin: 1px 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 2px 20px;
`;

const ListItem = styled.li`
  font-size: 1.2em;
  margin: 5px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Middle = styled.div`
  //   position: relative;
  flex: 1;
  display: flex;
  justify-content: center; /* Center the video horizontally */
  align-items: center; /* Center the video vertically */
`;

const VideoContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center; /* Center the video horizontally */
  align-items: center; /* Center the video vertically */
`;

const Video = styled.video`
  width: auto; /* Allow width to adjust automatically */
  height: 250px; /* Set a fixed height for the video */
  display: block;

  @media (max-width: 518px) {
    height: 150px; /* Set a fixed height for the video */
  }
`;

const PlayButton = styled.button`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Extraordinary = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const BigE = styled.span`
  font-size: 6em; /* Make E larger */
  color: #007bff;
  font-weight: bold;
  margin-right: 10px; /* Space between E and words */
`;

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Word = styled.span`
  margin-top: 4px; /* Space between words */
  font-size: 1.2em; /* Adjust font size as needed */
`;

const HighlightsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
  position: relative;
  text-align: start;

  &::after {
    position: absolute;
    content: "";
    display: flex;
    width: 50px;
    height: 2px;
    background: black;
    margin: 5px auto;
  }
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: start;
`;

const NumberItem = styled.div`
  flex: 1 1 30%; /* 3 items in a row */
  margin: 10px;

  @media (max-width: 768px) {
    flex: 1 1 45%; /* 2 items in a row */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* 1 item in a row */
  }
`;

const NumberText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const CountUpText1 = styled.div`
  font-size: 16px;
`;

const CountUpText2 = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: grey;
`;

const CardsContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const MainHeading = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: white;
  color: black;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: calc(20% - 20px); /* Adjust width as needed for responsiveness */
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(45% - 20px); /* Adjust for smaller screens */
  }

  @media (max-width: 480px) {
    width: calc(90% - 20px); /* Full width on very small screens */
  }
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardText = styled.p`
  margin-top: 10px;
`;

const OuterContainer = styled.div`
  width: 80%;
  margin: 40px auto; /* Margin top and bottom */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 990px) {
    flex-direction: column; /* Stack elements on small screens */
    align-items: flex-start;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  margin-right: 20px; /* Space between text and image */

  @media (max-width: 990px) {
    margin-right: 0; /* No margin on small screens */
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 990px) {
    display: none; /* Hide image on small screens */
  }
`;

const Heading2 = styled.h2`
  color: Black;
`;

const Heading3 = styled.h3`
  color: Black;
`;

const LastButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const PhoneIcon = styled(FaPhone)`
  margin-right: 5px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;


const AcademicsData = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const highlights = [
    {
      number: 5000,
      text1: "Students",
      text2: "A commitment towards Excellence",
    },
    { number: 640, text1: "Teachers", text2: "Creating Leaders for tomorrow" },
    { number: 730, text1: "Staff", text2: "Bonding as a team" },
    { number: 1900, text1: "Alumni ", text2: "A legacy that lasts" },
    {
      number: 300,
      text1: "",
      text2: "Offers from the world’s top 100 universities",
    },
    { number: 90, text1: "", text2: "Average marks in grade XII board exam" },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setShowPlayIcon(false);
      setTimeout(() => setShowPlayIcon(false), 1000);
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoClick = () => {
    if (!isPlaying) {
      setShowPlayIcon(true);
    }
    togglePlay();
  };

  useEffect(() => {
    const handlePlay = () => {
      setShowPlayIcon(false);
    };

    const handlePause = () => {
      setShowPlayIcon(true);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <>
      <Container>
        <Section>
          <h1>Welcome</h1>
          <Description>
            We hope to provide you with an insight into our vibrant, creative,
            and happy school to give your child the best start to discover a
            world of opportunities.
          </Description>
          <List>
            <ListItem color="red">
              Infrastructure with global standards
            </ListItem>
            <ListItem color="blue">Open, happy and secure environment</ListItem>
            <ListItem color="green">
              Knowledge and skill focused learning
            </ListItem>
            <ListItem color="purple">Creating lifelong learners</ListItem>
          </List>
          <Button>Find out More</Button>
        </Section>
        <Middle>
          <VideoContainer onClick={handleVideoClick}>
            <Video controls ref={videoRef} src={video1} />
            {showPlayIcon && (
              <PlayButton onClick={togglePlay}>
                {isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
              </PlayButton>
            )}
          </VideoContainer>
        </Middle>
        <Section>
          <Extraordinary>
            <BigE>E</BigE>
            <WordsContainer>
              <Word>xtrodinary</Word>
              <Word>xposure</Word>
              <Word>xperience</Word>
              <Word>ducation</Word>
            </WordsContainer>
          </Extraordinary>
          <h3>
            is what we strive to take our students to the next level, which is
            often the global level.
          </h3>
          <Description>
            Our culture and best practices revolve around kindness, love, and
            care through which we foster confidence and positivity. Children who
            come to us for education are given opportunities to excel to the
            best of their natural abilities, whatever be their field of choice.
          </Description>
        </Section>
      </Container>
      <HighlightsContainer>
        <Heading>Highlights</Heading>
        <NumbersContainer>
          {highlights.map((highlight, index) => (
            <NumberItem key={index}>
              <NumberText>
                <CountUp end={highlight.number} duration={2} />
                <sup>+</sup>
              </NumberText>
              <CountUpText1>{highlight.text1}</CountUpText1>
              <CountUpText2>{highlight.text2}</CountUpText2>
            </NumberItem>
          ))}
        </NumbersContainer>
      </HighlightsContainer>

      <Cards />

      <CardContainer>
      <MainHeading>Start</MainHeading>
      <CardsContainer>
        {Array.from({ length: 5 }, (_, index) => (
          <Card key={index}>
            <CardTitle>Card Title {index + 1}</CardTitle>
            <CardText>This is some text for card {index + 1}.</CardText>
          </Card>
        ))}
      </CardsContainer>
    </CardContainer>

    <OuterContainer>
      <LeftSide>
        <Heading2>Admissions open</Heading2>
        <Heading3>Get in touch with us to discuss</Heading3>
        <LastButton>
          <PhoneIcon />
          Contact Us
        </LastButton>
      </LeftSide>
      <RightSide>
        <Image src={image1} alt="Placeholder" />
      </RightSide>
    </OuterContainer>

    </>
  );
};

export default AcademicsData;
