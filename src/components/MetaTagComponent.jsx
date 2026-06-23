import { Helmet } from "react-helmet-async";

const MetaTagComponent = ({ content }) => {
  return (
    <Helmet>
      <title>Unmey Mahaddalkar | Frontend-Focused Full-Stack Engineer</title>
      <meta name="description" content={content} />
      <meta property="og:title" content="Unmey Mahaddalkar | Frontend-Focused Full-Stack Engineer" />
      <meta property="og:description" content={content} />
      <meta property="og:image" content="https://www.umahaddalkar.com/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Unmey Mahaddalkar | Frontend-Focused Full-Stack Engineer" />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content="https://www.umahaddalkar.com/og-image.png" />
    </Helmet>
  );
};
export default MetaTagComponent;
