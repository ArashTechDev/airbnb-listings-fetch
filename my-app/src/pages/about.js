// pages/about.js
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '../components/ListingDetails';
import PageHeader from '../components/PageHeader';

const About = ({ listing }) => {
  return (
    <>
      <PageHeader text="About the Developer - Arashdeep Singh " />
      <Card>
        <Card.Body>
          <p>Hello! I'm Arashdeep, currenntly a student at seneca studying how to make tech applications that can help other people. I like coding, playing chess, and badminton. This is one of the places I would like to visit. Join me on my journey! </p>
          <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
            <a>View Listing</a>
          </Link>
        </Card.Body>
        <ListingDetails listing={listing} />
      </Card>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://web422-joeq.onrender.com/api/listings/11610598');
  const data = await res.json();

  return {
    props: {
      listing: data
    }
  };
};

export default About;
