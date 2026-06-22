import { Helmet } from "react-helmet-async";

const MetaTagComponent = ({ content }) => {
  return (
    <Helmet>
      <title>Unmey Mahaddalkar | Full-Stack Engineer</title>
      <meta name="description" content={content} />
      <meta property="og:title" content="Unmey Mahaddalkar | Full-Stack Engineer" />
      <meta property="og:description" content={content} />
    </Helmet>
  );
};
export default MetaTagComponent;
