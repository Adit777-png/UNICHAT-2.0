"use client";

interface ImageModalProps{
    isOpen?: boolean;
    onClose : ()=> void;
    src?: string | null; 
}

const ImageModal:React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    src
}) => {
    return ( 
        <div>
            Image Modal!
        </div>
     );
}
 
export default ImageModal;