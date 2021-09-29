import React, {useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {

  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = ()=> setIsMenuOpen(false);
  const openViewer = ()=> setIsMenuOpen(true);

    return (
        <>
      {isMenuOpen && (
        <ImageViewer
          src={ props.image }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        
        />
      )}

            <div className="w-32 h-48 md:w-48 md-h-48 flex flex-col" onClick={openViewer}>
        <div className="w-full h-full overflow-hidden rounded">
          <img
            src={props.image[0]}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages} Pages</p>
        </div>
      </div>
        </>
    )
}

export default MenuCollection
