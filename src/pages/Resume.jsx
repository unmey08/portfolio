import { Document, Page, pdfjs } from 'react-pdf'
import pdfFile from '../assets/resume/UnmeyMahaddalkarResume.pdf'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }
    return (
        <div className='max-container'>
            <div className='flex justify-center items-center flex-col'>
                <Link to={pdfFile} target="_blank" className="btn" download>Download Resume</Link>
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} className="my-4 border-2 block-container rounded-lg">
                    <Page pageNumber={1} width={800} />
                </Document>
            </div>
        </div>
    )
}

export default Resume;