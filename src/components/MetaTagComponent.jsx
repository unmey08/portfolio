import { Helmet } from "react-helmet-async";

const MetaTagComponent = ({ content }) => {
  return (
    <Helmet>
      <title>Unmey Mahaddalkar | Portfolio</title>
      <meta name="description" content={content} />
    </Helmet>
  );
};
export default MetaTagComponent;
