import React, { Fragment } from 'react';
import Lightbox from 'react-image-lightbox';

const SingleImage = ({ photoIndex, setPhotoIndex, images }) => {

    const onMovePrev = () => {
        const prev = (photoIndex.index + images.length - 1) % images.length;
        setPhotoIndex({ ...photoIndex, index: prev });
    };
    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % images.length;
        setPhotoIndex({ ...photoIndex, index: next });
    };
    return (
        <Fragment>
            {photoIndex.isOpen && (
                <Lightbox
                    mainSrc={require(`../../../assets/images/${images[photoIndex.index]}`)}
                    nextSrc={require(`../../../assets/images/${images[(photoIndex.index + 1) % images.length]}`)}
                    prevSrc={require(`../../../assets/images/${images[(photoIndex.index + images.length - 1) % images.length]}`)}
                    imageTitle={photoIndex.index + 1 + '/' + images.length}
                    onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                    onMovePrevRequest={onMovePrev}
                    onMoveNextRequest={onMoveNext}
                />
            )}
        </Fragment>
    );
};

export default SingleImage;