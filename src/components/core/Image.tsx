import React, { useState, useEffect } from 'react';
import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img<{ $isLoading?: boolean }>`
    display: ${props => props.$isLoading ? 'none' : 'block'};
    max-width: 100%;
    height: 300px;
    box-shadow: 0 0 0 1px #e0e0e0;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background-color: #f5f5f5;
    padding: 8px;
    transition: all 0.2s ease;
    
    &:hover {
        border-color: #0077B5;
        box-shadow: 0 0 0 1px #0077B5;
    }
`;

const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #D9E3EA;
    font-size: 14px;
`;

const StyledError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #D9E3EA;
    font-size: 14px;
    background-color: rgba(217, 227, 234, 0.1);
    border-radius: 3px;
`;

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    fallbackSrc?: string;
    onError?: () => void;
    showLoader?: boolean;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    fallbackSrc,
    onError,
    showLoader = false,
    className,
    ...props
}) => {
    const [imageSrc, setImageSrc] = useState<string>(src);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        setImageSrc(src);
        setIsLoading(true);
        setHasError(false);
    }, [src]);

    const handleError = () => {
        if (fallbackSrc && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(false);
        } else {
            setHasError(true);
            setIsLoading(false);
        }
        if (onError) {
            onError();
        }
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && showLoader && (
                <StyledLoader className={className}>
                    Loading...
                </StyledLoader>
            )}
            {!hasError && (
                <StyledImage
                    src={imageSrc}
                    alt={alt}
                    className={className}
                    onError={handleError}
                    onLoad={handleLoad}
                    loading="lazy"
                    $isLoading={isLoading && showLoader}
                    {...props}
                />
            )}
            {hasError && !fallbackSrc && (
                <StyledError className={className}>
                    Failed to load image
                </StyledError>
            )}
        </>
    );
};

