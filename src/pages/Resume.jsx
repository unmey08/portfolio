import { Document, Page, pdfjs } from 'react-pdf'
import pdfFile from '../assets/resume/UnmeyMahaddalkarResume.pdf'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Loader } from '@react-three/drei';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const showLoader = () => {
        return (<Loader />);
    }
    return (
        <div className='max-container h-screen dark:h-screen'>
            <div className='flex justify-center items-center flex-col'>
                <Link to={pdfFile} target="_blank" className="btn" download>Download Resume</Link>
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} onLoadProgress={showLoader} className="my-4 block-container rounded-md border-cyan-500  border-4 hover:border-white">
                    <Page pageNumber={1} width={window.innerWidth < 768 ? 400 : 800} />
                </Document>
            </div>
        </div>
    )
}

export default Resume;